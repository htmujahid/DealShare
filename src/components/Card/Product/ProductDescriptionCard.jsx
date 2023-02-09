import { ProductReview } from "@/components/Patterns";
import {
  calculateAverageRating,
  calculateDayDifference,
} from "@/lib/app/product";
import React, { useState } from "react";

function ProductDescriptionCard({ product, feedbacks }) {
  const [qty, setQty] = useState(1);

  return (
    <>
      <h3 className="text-4xl font-bold pb-2">{product?.name}</h3>
      {feedbacks?.length > 0 ? (
        <div className="flex gap-4 items-center pb-10">
          <div>
            <ProductReview rating={calculateAverageRating(feedbacks)} />
          </div>
          <span className="text-sm text-gray-500">(1 customer reviews)</span>
        </div>
      ) : (
        <div className="flex gap-4 items-center pb-10">No customer reviews</div>
      )}
      <div className="text-sm text-black pb-10">{product?.description}</div>
      <div className="grid grid-cols-2 gap-x-32 text-gray-500 text-sm items-start pb-10">
        <div className="grid grid-cols-2 gap-y-2">
          <div>SKU:</div>
          <div>{product?._id}</div>
          <div>Category:</div>
          <div>{product?.category}</div>
          <div>Stock:</div>
          <div>In stock</div>
        </div>
        <div className="grid grid-cols-2 gap-y-2">
          <div>Freshness:</div>
          <div>
            {calculateDayDifference(
              new Date(product?.createdAt),
              new Date()
            ).toString()}{" "}
            days old
          </div>
          <div>Buy by:</div>
          <div>pcs, box, pack</div>
          <div>Delivery:</div>
          <div>In 2 days</div>
          <div>Delivery Area:</div>
          <div>Europe</div>
        </div>
      </div>
      <div className="flex rounded-xl p-4 border gap-x-6 mb-6">
        <div className="flex-1">
          <h4 className="text-2xl text-primary-dark font-bold">
            {product?.price} USD
          </h4>
          <p className="text-xs text-gray-500 line-through">
            {parseInt(product?.price) + 75} USD
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl px-4 py-3 text-sm">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-12 focus:outline-none bg-inherit"
          />
          <span className="border border-gray-300"></span>
          <select
            name="buyby"
            id="buyby"
            className="bg-inherit focus:outline-none"
          >
            <option value="Pcs">Pcs</option>
            <option value="Box">Box</option>
            <option value="Pack">Pack</option>
          </select>
        </div>
        <button className="bg-primary rounded-xl px-4 py-3 flex gap-1 font-bold">
          <span className="material-symbols-outlined">add</span>
          Add to Cart
        </button>
      </div>
      <div className="mb-12">
        <button className="font-bold flex gap-1 px-3 py-1">
          <span className="material-symbols-outlined">favorite</span>
          Add to My Wishlist
        </button>
      </div>
    </>
  );
}

export default ProductDescriptionCard;
