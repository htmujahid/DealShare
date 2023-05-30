import { CartContext } from "@/components/ContextProviders";
import { Button } from "@/components/Form";
import {
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
} from "@/components/Modal";
import { isItemAlreadyIncluded } from "@/lib/app/cart";
import Link from "next/link";
import React, { useContext, useState } from "react";

function ProductCard({ product }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <Link className="col-span-1" href={`/product/${product?._id}`}>
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <img
            src={product?.media?.mediaUrl[0] ?? ""}
            alt={product?.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900 h-5 overflow-hidden">{product?.name}</h3>
          <p className="mt-1 text-sm text-gray-500 h-5 overflow-hidden">{product?.category}</p>
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            ${product?.sellingPrice}
          </p>
        </div>
      </div>
      <div className="mt-4">
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
          className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          Add to bag<span className="sr-only">, {product?.name}</span>
        </button>
      </div>
    </Link>
  );
}

export function ConfirmationModal({ numberOfItems, onClose }) {
  return (
    <ModalContainer maxWidth={425}>
      <ModalHeader heading="Item added" onClose={onClose} />
      <ModalBody>
        <div className="flex">
          <span className="material-symbols-outlined mr-2 text-[#9dcc00]">
            check_circle
          </span>
          A new item has been added to your cart. You have {numberOfItems} items
          in your cart.
        </div>
      </ModalBody>
      <ModalFooter>
        <Link href="/cart">
          <Button type="primary">View Shopping Cart</Button>
        </Link>
        <Button onClick={onClose}>Continue Shopping</Button>
      </ModalFooter>
    </ModalContainer>
  );
}

export default ProductCard;
