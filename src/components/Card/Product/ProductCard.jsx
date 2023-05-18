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
      <div className="p-4 border border-primary-light rounded-xl col-span-4">
        <div className="rounded-xl flex items-center ">
          <img
            className="w-full h-48"
            src={product?.media?.mediaUrl[0] ?? ""}
          />
        </div>
        <div className="pt-4">
          <h3 className="text h-7 text-lg overflow-hidden">{product?.name}</h3>
          {/* <p className="text-sm pb-2 h-[63px] overflow-hidden">
            {product?.description}
          </p> */}
          <div className="pb-2">
            <p className="text-2xl font-bold">${product?.sellingPrice}</p>
          </div>
          <div className="flex justify-between items-center">
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
            <Button
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isItemAlreadyIncluded(cartItems, product)) {
                  setCartItems((prev) => [...prev, product]);
                }
                setShowConfirmationModal(true);
              }}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ConfirmationModal({ numberOfItems, onClose }) {
  return (
    <ModalContainer>
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
