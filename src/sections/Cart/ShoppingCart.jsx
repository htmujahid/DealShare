import React, { useContext } from "react";
import { Button } from "@/components/Form";
import { ProductSummaryCard } from "@/components/Card";
import { OrderSummary } from "../Checkout";
import Link from "next/link";
import { CartContext } from "@/components/ContextProviders";

function ShoppingCart() {
  const { cartItems } = useContext(CartContext);

  return cartItems.length > 0 ? (
    <div className="flex justify-between my-16">
      <div className="flex w-3/5 justify-start">
        <div className="w-full border rounded-xl py-8 px-4">
          <div className="mb-10">
            <h5 className="text-2xl font-bold pb-1">Shopping Cart</h5>
            <p className="pb-1">
              Price can change depending on shipping method and taxes of your
              state.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {cartItems.map((product) => (
              <ProductSummaryCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <OrderSummary />
    </div>
  ) : (
    <div className="min-h-[500px] flex flex-col justify-center items-center">
      <span>There are currently no items in your cart.</span>
      <Link href="/">
        <Button variant="primary">Continue Shopping</Button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
