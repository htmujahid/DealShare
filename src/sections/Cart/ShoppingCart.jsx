import React, { useContext, useEffect } from "react";
import { Button } from "@/components/Form";
import { ProductSummaryCard } from "@/components/Card";
import Link from "next/link";
import { CartContext } from "@/components/ContextProviders";
import { useRouter } from "next/router";
import OrderSummary from "../Checkout/OrderSummary";

function ShoppingCart() {
  const router = useRouter();
  const { emptyCart } = router.query;
  const { setCartItems, cartItems } = useContext(CartContext);

  useEffect(() => {
    if (emptyCart) {
      setCartItems([]);
      router.replace("/");
    }
  }, [emptyCart]);

  return cartItems.length > 0 ? (
    <div className="flex justify-between my-16">
      <div className="flex justify-start w-3/5">
        <div className="w-full px-4 py-8 border rounded-xl">
          <div className="mb-10">
            <h5 className="pb-1 text-2xl font-bold">Shopping Cart</h5>
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
      <OrderSummary addressDetails={["", "", "", ""]} />
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
