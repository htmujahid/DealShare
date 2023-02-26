import React from "react";
import { Button } from "@/components/Form";
import { ProductSummaryCard } from "@/components/Card";
import Link from "next/link";
function ShppingCart() {
  return (
    <div className="flex justify-end my-16">
      <div className="w-[468px] border rounded-xl py-8 px-4">
        <div className="mb-10">
          <h5 className="text-2xl font-bold pb-1">Shopping Cart</h5>
          <p className="pb-1">
            Price can change depending on shipping method and taxes of your
            state.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {Array(3)
            .fill()
            .map((_, i) => (
              <ProductSummaryCard key={i} />
            ))}
        </div>
        <div className="grid grid-cols-2 mt-8 gap-3 text-sm font-bold mb-4">
          <p className="">Subtotal</p>
          <p className="text-right">$ 1,000.00</p>
          <p className="">Tax</p>
          <p className="text-right">$ 1,000.00</p>
          <p className="">Shipping</p>
          <p className="text-right">$ 1,000.00</p>
          <p className="">
            Total <br />
            <span className="text-xs font-normal">Taxes are applied</span>
          </p>
          <p className="text-right text-primary-dark text-2xl">$ 1,000.00</p>
        </div>
        <div className="flex justify-between">
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
          <Link href="/checkout">
            <Button variant="primary">Go to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShppingCart;
