import { CartContext } from "@/components/ContextProviders";
import { ProductReview } from "@/components/Patterns";
import {
  calculateAverageRating,
  calculateDayDifference,
} from "@/lib/app/product";
import React, { useContext, useState } from "react";
import { ConfirmationModal } from "./ProductCard";
import { isItemAlreadyIncluded } from "@/lib/app/cart";

function ProductDescriptionCard({ product, feedbacks }) {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [qty, setQty] = useState(1);
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <>
      <h3 className="pb-2 text-4xl font-bold">{product?.name}</h3>
      {feedbacks?.length > 0 ? (
        <div className="flex items-center gap-4 pb-10">
          <div>
            <ProductReview rating={calculateAverageRating(feedbacks)} />
          </div>
          <span className="text-sm text-gray-500">(1 customer reviews)</span>
        </div>
      ) : (
        <div className="flex items-center gap-4 pb-10">No customer reviews</div>
      )}
      <div className="pb-10 text-sm text-black">{product?.description}</div>
      <div className="grid items-start grid-cols-2 pb-10 text-sm text-gray-500 gap-x-32">
        <div className="grid grid-cols-2 gap-y-2">
          <div>SKU:</div>
          <div>{product?._id}</div>
          <div>Category:</div>
          <div>{product?.category}</div>
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
          <div>Stock:</div>
          <div>In stock</div>
        </div>
      </div>
      <div className="flex p-4 mb-6 border rounded-xl gap-x-6">
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-primary-dark">
            {product?.sellingPrice} USD
          </h4>
          <p className="text-xs text-gray-500 line-through">
            {parseInt(product?.sellingPrice) + 75} USD
          </p>
        </div>
        <div className="px-4 py-3 text-sm bg-gray-100 rounded-xl">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => {
              setQty(parseInt(e.target.value));
              product.quantity = parseInt(e.target.value);
            }}
            className="w-12 focus:outline-none bg-inherit"
          />
          <span className="border border-gray-300"></span>
        </div>
        {showConfirmationModal && (
          <ConfirmationModal
            numberOfItems={cartItems.length}
            onClose={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowConfirmationModal(false);
            }}
          />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isItemAlreadyIncluded(cartItems, product)) {
              setCartItems((prev) => [...prev, product]);
            }
            setShowConfirmationModal(true);
          }}
          className="flex gap-1 px-4 py-3 font-bold bg-primary rounded-xl"
        >
          <span className="material-symbols-outlined">add</span>
          Add to Cart
        </button>
      </div>
      <div className="mb-12">
        <button className="flex gap-1 px-3 py-1 font-bold">
          <span className="material-symbols-outlined">favorite</span>
          Add to My Wishlist
        </button>
      </div>
    </>
  );
}

export default ProductDescriptionCard;
