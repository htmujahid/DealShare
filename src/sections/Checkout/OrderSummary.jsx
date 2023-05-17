import { BillSummaryCard } from "@/components/Card";
import { CartContext } from "@/components/ContextProviders";
import { Button } from "@/components/Form";
import { calculateSubtotalPrice, calculateTotalPrice } from "@/lib/app/product";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

function OrderSummary() {
  const router = useRouter();
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="w-[468px] border rounded-xl py-8 px-4 top-8">
        <div className="mb-10">
          <h5 className="text-2xl font-bold pb-1">Order Summary</h5>
          <p className="pb-1">
            Price can change depending on shipping method and taxes of your
            state.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {cartItems?.map((product) => (
            <BillSummaryCard key={product?._id} product={product} />
          ))}
        </div>
        <div className="grid grid-cols-2 mt-8 gap-3 text-sm font-bold">
          <p className="">Subtotal</p>
          <p className="text-right">$ {calculateSubtotalPrice(cartItems)}</p>
          <p className="">Tax</p>
          <p className="text-right">$ 0.00</p>
          <p className="">Shipping</p>
          <p className="text-right">$ 0.00</p>
          <p className="">
            Total <br />
            <span className="text-xs font-normal">Taxes are applied</span>
          </p>
          <p className="text-right text-primary-dark text-2xl">
            $ {calculateTotalPrice(cartItems)}
          </p>
        </div>
        <div className="flex mt-4 justify-between">
          {router.asPath === "/cart" && (
            <Link className="w-full" href="/checkout">
              <Button className="w-full justify-center" variant="primary">
                Go to Checkout
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
