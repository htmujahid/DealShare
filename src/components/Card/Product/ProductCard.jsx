import { Button } from "@/components/Form";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link className="col-span-1" href={`/product/${product?._id}`}>
      <div className="p-4 border border-primary-light rounded-xl col-span-4">
        <div className="rounded-x bg-neutral flex items-center">
          <img
            className="rounded-xl w-full"
            src={product?.media?.mediaURL[0] ?? ""}
            alt="abc"
          />
        </div>
        <div className="pt-4">
          <h3 className="font-bold text-lg h-8 overflow-hidden">
            {product?.name}
          </h3>
          <p className="text-sm pb-2 h-[63px] overflow-hidden">
            {product?.description}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">${product?.price}</p>
            </div>
            <Button
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
