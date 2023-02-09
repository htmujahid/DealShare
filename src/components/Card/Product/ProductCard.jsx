import { Button } from "@/components/Form";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link href={`/product/${product?._id}`}>
      <div className="p-4 border border-primary-light rounded-xl w-[240px] h-[323]">
        <div className="rounded-xl h-[180px] w-[208px] bg-neutral flex items-center">
          <img
            className="hover:scale-125 transition-transform duration-300 rounded-xl h-full"
            src={product?.media?.mediaURL[0] ?? ""}
            alt="abc"
          />
        </div>
        <div className="pt-4">
          <h3 className="font-bold text-lg">{product?.name}</h3>
          <p className="text-sm pb-2">{product?.description}</p>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-primary-dark text-lg font-bold">
                ${product?.price}
              </p>
              <p className="font-semibold text-gray-400 line-through">
                ${parseInt(product?.price) + 75}
              </p>
            </div>
            <Button
              type="primary"
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
