import { getEstimatedTimeOfArrival, isEmpty } from "@/lib/app/utils";
import { useEffect, useState } from "react";

function BillSummaryCard({ product, addressDetails }) {
  const [ETA, setETA] = useState("Invalid Address");

  useEffect(() => {
    const getETA = async () => {
      if (
        isEmpty(addressDetails[0]) ||
        isEmpty(addressDetails[1]) ||
        isEmpty(addressDetails[2]) ||
        isEmpty(addressDetails[3])
      )
        return;

      const eta = await getEstimatedTimeOfArrival(
        product,
        {
          address: addressDetails[0],
          town: addressDetails[1],
          zip: addressDetails[2],
          stateCountry: addressDetails[3],
        },
        product.manufacturer
      );
      setETA(eta);
    };
    getETA();
  }, [addressDetails]);

  return (
    <div className="flex gap-x-3">
      <div>
        <div className="w-[100px] max-h-[75px] bg-gray-100 rounded-xl mb-4">
          <img
            src={product?.media?.mediaUrl[0]}
            className="h-full w-full max-h-[75px]"
            alt={product?.name}
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="font-bold">{product?.name}</p>
        <div className="grid grid-cols-2 gap-1 text-sm text-gray-500">
          <p className="w-20">Type</p>
          <p className="w-20">{product?.category}</p>
          <p className="w-20">Quantity</p>
          <p className="w-20">{product?.quantity ?? 1}</p>
          <p className="w-20">Est. Delivery</p>
          <p className="w-20">{ETA} D</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-primary-dark">
            {product?.sellingPrice} USD
          </h4>
          <p className="text-xs text-gray-500 line-through">
            {parseFloat(product?.sellingPrice) + 50} USD
          </p>
        </div>
      </div>
    </div>
  );
}

export default BillSummaryCard;
