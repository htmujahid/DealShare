export const taxPercent = 5.5;
export const shipping = 25;

export function calculateDayDifference(date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export function calculateAverageRating(feedbacks) {
  var stars = 0;
  for (let i = 0; i < feedbacks.length; i++) {
    stars += feedbacks[i].stars;
  }

  return Math.ceil(stars / feedbacks.length);
}

export function stringToTitleCase(string) {
  let titleCase = "";
  if (typeof string !== "string") {
    return undefined;
  } else {
    const strArray = string.split(" ");
    for (let i = 0; i < strArray.length; i++) {
      titleCase += strArray[i][0].toUpperCase();
      titleCase += strArray[i].substring(1).toLowerCase();
      if (strArray[i + 1]) {
        titleCase += " ";
      }
    }
    return titleCase;
  }
}

export function calculateSubtotalPrice(products) {
  let totalPrice = 0;
  for (let i = 0; i < products?.length; i++) {
    totalPrice +=
      parseFloat(products[i]?.sellingPrice) * (products[i]?.quantity ?? 1);
  }

  return totalPrice;
}

export function calculateTotalPrice(products) {
  let totalPrice = calculateSubtotalPrice(products);
  totalPrice += totalPrice * (taxPercent / 100) + shipping;
  return totalPrice;
}
