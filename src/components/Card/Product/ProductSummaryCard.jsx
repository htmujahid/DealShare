import { CartContext } from "@/components/ContextProviders";
import { DeleteConfirmationModal } from "@/components/Modal";
import { ProductReview } from "@/components/Patterns";
import React, { useContext, useEffect, useState } from "react";

function ProductSummaryCard({ product }) {
  const [qty, setQty] = React.useState(1);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showDeleteConfrimation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    setCartItems(
      cartItems.map((item) => {
        if (item._id === product._id) {
          const newItem = item;
          item.quantity = qty;
          return newItem;
        }
        return item;
      })
    );
  }, [qty]);

  return (
    <div className="flex gap-x-3">
      {showDeleteConfrimation && (
        <DeleteConfirmationModal
          onClose={() => setShowDeleteConfirmation(false)}
          message="Are you sure that you want to delete this item from your cart?"
          onConfirm={() =>
            setCartItems(cartItems.filter((item) => item._id !== product._id))
          }
        />
      )}
      <div>
        <div className="w-[100px] max-h-[67px] bg-gray-100 rounded-xl mb-4">
          <img
            src={product?.media.mediaURL[0]}
            className="w-full"
            alt={product?.name}
          />
        </div>
        <button
          onClick={() => setShowDeleteConfirmation(true)}
          className="flex text-sm text-gray-500 items-center"
        >
          <span className={`material-symbols-outlined mr-2`}>cancel</span>
          Remove
        </button>
      </div>
      <div className="flex-1">
        <p className="font-bold">{product?.name}</p>
        <div className="text-sm text-gray-500 grid grid-cols-2 gap-1">
          <p className="w-20">Type</p>
          <p className="w-20">{product?.category}</p>
          <p className="w-20">Est. Delivery</p>
          <p className="w-20">12 Days</p>
        </div>
        <ProductReview rating={4} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-1">
          <h4 className="text-2xl text-primary-dark font-bold">
            {product?.price} USD
          </h4>
          <p className="text-xs text-gray-500 line-through">
            {parseFloat(product?.price) + 50} USD
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
      </div>
    </div>
  );
}

export default ProductSummaryCard;
