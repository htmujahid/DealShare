import { db } from "../middleware";

const calculatePriceDifference = (price, basePrice) => {
  return price - basePrice;
};

const calculateDistanceDifference = (distance, baseDistance) => {
  return distance - baseDistance;
};

const degreeToRadians = (degree) => {
  return degree * (Math.PI / 180);
};

const getCoordinatesFromAddress = async (address) => {
  const response = await fetch(`https://geocode.maps.co/search?q=${address}`);
  const data = await response.json();
  return {
    latitude: parseFloat(data[0].lat),
    longitude: parseFloat(data[0].lon),
  };
};

const getPriceWeight = (price, basePrice) => {
  const priceDifference = calculatePriceDifference(price, basePrice);

  if (priceDifference <= 0) {
    return 1;
  } else if (priceDifference <= 50) {
    return 1.02;
  } else if (priceDifference <= 100) {
    return 1.05;
  } else if (priceDifference <= 200) {
    return 1.08;
  } else if (priceDifference <= 500) {
    return 1.1;
  } else if (priceDifference <= 1000) {
    return 1.15;
  } else {
    return 1.2;
  }
};

//Calculate small distances using Haversine formula
//Computational Time Complexity O(1)
const haversineDistance = (location1, location2) => {
  const rEarth = 6371000; // radius of Earth in meters
  const phi1 = degreeToRadians(location1.latitude);
  const phi2 = degreeToRadians(location2.latitude);
  const deltaPhi = degreeToRadians(location2.latitude - location1.latitude);
  const deltaLambda = degreeToRadians(
    location2.longitude - location1.longitude
  );
  const a =
    Math.sin(deltaPhi / 2) ** 2 +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const meters = rEarth * c; // The distance in meters
  return meters / 1000; //Return the distance in kilometers
};

//Calculate longer distances using Inverse Vincenty's formula
//Computational Time Complexity O(N) But more precisly it can range from N to 1000N
function inverseVincentyDistance(location1, location2) {
  const phiOne = degreeToRadians(location1.latitude);
  const lambda1 = degreeToRadians(location1.longitude);
  const phiTwo = degreeToRadians(location2.latitude);
  const lambda2 = degreeToRadians(location2.longitude);

  const wgs84ellipsoid = {
    a: 6378137,
    b: 6356752.314245,
    f: 1 / 298.257223563,
  };
  const { a, b, f } = wgs84ellipsoid;

  const L = lambda2 - lambda1; // L = difference in longitude, U = reduced latitude, defined by tan U = (1-f)·tanphi.
  const tanU1 = (1 - f) * Math.tan(phiOne),
    cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1),
    sinU1 = tanU1 * cosU1;
  const tanU2 = (1 - f) * Math.tan(phiTwo),
    cosU2 = 1 / Math.sqrt(1 + tanU2 * tanU2),
    sinU2 = tanU2 * cosU2;

  const antipodal =
    Math.abs(L) > Math.PI / 2 || Math.abs(phiTwo - phiOne) > Math.PI / 2;

  let lambda = L,
    sinLambda = null,
    cosLambda = null; // lambda = difference in longitude on an auxiliary sphere
  let sigma = antipodal ? Math.PI : 0,
    sinSigma = 0,
    cosSigma = antipodal ? -1 : 1,
    sinSqsigma = null; // sigma = angular distance P₁ P₂ on the sphere
  let cos2sigmaM = 1; // sigmaM = angular distance on the sphere from the equator to the midpoint of the line
  let sinalpha = null,
    cosSqAlpha = 1; // alpha = azimuth of the geodesic at the equator
  let C = null;

  let lambdaʹ = null,
    iterations = 0;
  do {
    sinLambda = Math.sin(lambda);
    cosLambda = Math.cos(lambda);
    sinSqsigma =
      cosU2 * sinLambda * (cosU2 * sinLambda) +
      (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) *
        (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda);

    if (Math.abs(sinSqsigma) < Number.EPSILON) {
      break; // co-incident/antipodal points (falls back on lambda/sigma = L)
    }

    sinSigma = Math.sqrt(sinSqsigma);
    cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
    sigma = Math.atan2(sinSigma, cosSigma);
    sinalpha = (cosU1 * cosU2 * sinLambda) / sinSigma;
    cosSqAlpha = 1 - sinalpha * sinalpha;
    cos2sigmaM =
      cosSqAlpha != 0 ? cosSigma - (2 * sinU1 * sinU2) / cosSqAlpha : 0; // on equatorial line cos²alpha = 0 (§6)
    C = (f / 16) * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
    lambdaʹ = lambda;
    lambda =
      L +
      (1 - C) *
        f *
        sinalpha *
        (sigma +
          C *
            sinSigma *
            (cos2sigmaM + C * cosSigma * (-1 + 2 * cos2sigmaM * cos2sigmaM)));
    const iterationCheck = antipodal
      ? Math.abs(lambda) - Math.PI
      : Math.abs(lambda);
    if (iterationCheck > Math.PI) {
      throw new Error("lambda > Math.PI");
    }
  } while (Math.abs(lambda - lambdaʹ) > 1e-12 && ++iterations < 1000);
  if (iterations >= 1000) {
    throw new Error("Vincenty formula failed to converge");
  }

  const uSq = (cosSqAlpha * (a * a - b * b)) / (b * b);
  const A = 1 + (uSq / 16384) * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
  const B = (uSq / 1024) * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
  const deltaSigma =
    B *
    sinSigma *
    (cos2sigmaM +
      (B / 4) *
        (cosSigma * (-1 + 2 * cos2sigmaM * cos2sigmaM) -
          (B / 6) *
            cos2sigmaM *
            (-3 + 4 * sinSigma * sinSigma) *
            (-3 + 4 * cos2sigmaM * cos2sigmaM)));

  const distance = b * A * (sigma - deltaSigma); // distance = length of the geodesic

  return distance / 1000; //return the distance in kilometers
}

//If the distance is less than 100km, use Haversine's formula, else use Inverse Vincenty's formula
const getDistanceBetweenPoints = (location1, locaation2) => {
  let baseDistance = 100;
  let distance = haversineDistance(location1, locaation2);
  if (distance <= baseDistance) {
    return distance;
  } else {
    return inverseVincentyDistance(location1, locaation2);
  }
};

const getHoursCaclculatedForDistance = (distance, baseDistance) => {
  const distanceDifference = calculateDistanceDifference(
    distance,
    baseDistance
  );

  //Return number of hours based on distance
  if (distanceDifference <= 0) {
    return 0;
  } else if (distanceDifference <= 50) {
    return 12;
  } else if (distanceDifference <= 100) {
    return 24;
  } else if (distanceDifference <= 200) {
    return 30;
  } else if (distanceDifference <= 500) {
    return 48;
  } else if (distanceDifference <= 800) {
    return 72;
  } else {
    return 96;
  }
};

/*
The algorithm for ETA takes multiple parameters 
  - the quantity ordered by the customer 
  - the product threshold set by the manufacturer 
  - the price of the product 
  - proximity of the customer to the manufacturer's location)
*/
export const getEstimatedTimeOfArrival = async (
  product,
  order,
  manufacturer
) => {
  let baseTime = 72; // base time in hours
  let basePrice = 50; // base price in dollars
  let baseDistance = 30; //base distance in kilometers

  console.log("ETA before calculations: ", Math.ceil(baseTime / 24));
  const quantityPercentage = order.quantity / product.threshold;
  const priceWeight = getPriceWeight(product.price, basePrice);

  //Increase price based on ordered quantity
  let estimatedTime = baseTime / quantityPercentage;
  console.log("ETA after quantity factor: ", Math.ceil(estimatedTime / 24));

  //Increase time based on price
  estimatedTime = estimatedTime * priceWeight;
  console.log("ETA after pricing factor: ", Math.ceil(estimatedTime / 24));

  /*
    If the order is from a different country, add 10 days for shipping and customs
    otherwise add time based on distance
  */
  if (order.delivery.address.country !== manufacturer.address.country) {
    estimatedTime += 10 * 24;
  } else {
    const orderCoords = await getCoordinatesFromAddress(
      order.delivery.address.streetAddress +
        ", " +
        order.delivery.address.city +
        ", " +
        order.delivery.address.country
    );
    const manufacturerCoords = await getCoordinatesFromAddress(
      (await manufacturer.address.streetAddress) +
        ", " +
        manufacturer.address.city +
        ", " +
        manufacturer.address.country
    );
    const distance = getDistanceBetweenPoints(orderCoords, manufacturerCoords);
    estimatedTime += getHoursCaclculatedForDistance(distance, baseDistance);
  }
  console.log("ETA after distance factor: ", Math.ceil(estimatedTime / 24));
  return Math.ceil(estimatedTime / 24);
};

/*

The algorithm for pooling orders

*/
export const addOrderPool = async (order) => {
  order.products.forEach(async (product) => {
    const query = {
      productId: product.id,
      "address.city": order.delivery.address.city,
      "address.country": order.delivery.address.country,
    };
    const update = {
      $push: { orders: order._id },
      $inc: { totalQuantity: product.quantity },
      productId: product.id,
      "address.city": order.delivery.address.city,
      "address.country": order.delivery.address.country,
    };
    const options = { upsert: true };
    await db.collection("orderPool").insertOne(query, update, options);
  });
};
