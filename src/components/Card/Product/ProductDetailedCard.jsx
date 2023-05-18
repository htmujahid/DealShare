import { Button } from "@/components/Form";
import { ProductReview } from "@/components/Patterns";
import { calculateAverageRating, useProductFeedbacks } from "@/lib/app/product";
import Link from "next/link";
import React from "react";

function ProductDetailedCard({ product }) {
  const { feedbacks } = useProductFeedbacks(product?._id);

  return (
    <div className="border border-primary-light rounded-xl overflow-hidden w-[869px] h-[280] flex gap-8">
      <div className="h-[280px] w-[280px] bg-neutral">
        <img
          className="h-full"
          src={product?.media?.mediaUrl[0] ?? ""}
          alt="abc"
        />
      </div>
      <div className="flex-1 py-8">
        <h3 className="pb-1 text-lg font-bold">{product?.name}</h3>
        <p className="pb-2 text-sm">{product?.description}</p>
        {feedbacks?.length > 0 && (
          <ProductReview rating={calculateAverageRating(feedbacks)} />
        )}
        <div className="pt-3 text-sm text-gray-500">
          <div className="flex pt-3">
            <div className="w-24">Category</div>
            <div className="w-24">{product?.category}</div>
          </div>
          <div className="flex pt-3">
            <div className="w-24">Delivery</div>
            <div className="w-24">Europe</div>
          </div>
          <div className="flex pt-3">
            <div className="w-24">Stock</div>
            <div className="w-24">320 pcs</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between py-8 pr-8">
        <div>
          <p className="text-lg font-bold text-primary-dark">
            {product?.sellingPrice} USD
          </p>
          <p className="text-sm font-semibold text-gray-400 line-through">
            {parseInt(product?.sellingPrice) + 75}
          </p>
        </div>
        <div className="text-sm text-gray-500">
          <p className="font-bold">Shipping Fees</p>
          <p>Delivery in 12 day</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href={`/product/${product?._id}`}>
            <Button variant="primary">
              Product Detail
              <span className="material-symbols-outlined">arrow_right</span>
            </Button>
          </Link>
          <Button>
            <span className="pr-2 material-symbols-outlined">favorite</span>
            Add to Card
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailedCard;
