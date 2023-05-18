import { CartContext } from "@/components/ContextProviders";
import { DeleteConfirmationModal } from "@/components/Modal";
import React, { useContext, useEffect, useState } from "react";

function ProductSummaryCard({ product }) {
  const [qty, setQty] = React.useState(product?.quantity ?? 1);
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
        <div className="w-[100px] max-h-[75px] bg-gray-100 rounded-xl mb-4">
          <img
            src={product?.media?.mediaUrl[0]}
            className="w-full h-full max-h-[75px]"
            alt={product?.name}
          />
        </div>
        <button
          onClick={() => setShowDeleteConfirmation(true)}
          className="flex items-center text-sm text-gray-500"
        >
          <span className={`material-symbols-outlined mr-2`}>cancel</span>
          Remove
        </button>
      </div>
      <div className="flex-1">
        <p className="font-bold">{product?.name}</p>
        <div className="grid grid-cols-2 gap-1 text-sm text-gray-500">
          <p className="w-20">Type</p>
          <p className="w-20">{product?.category}</p>
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
        <div className="px-4 py-3 text-sm bg-gray-100 rounded-xl">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value))}
            className="w-12 focus:outline-none bg-inherit"
          />
          <span className="border border-gray-300"></span>
        </div>
      </div>
    </div>
  );
}

export default ProductSummaryCard;
