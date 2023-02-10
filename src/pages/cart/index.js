import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import { CustomerContainer } from "@/components/Layouts/Container";
import { ShoppingCart } from "@/sections/Cart";

function index() {
  return (
    <CustomerLayout>
      <CustomerContainer>
        <ShoppingCart />
      </CustomerContainer>
    </CustomerLayout>
  );
}

export default index;
