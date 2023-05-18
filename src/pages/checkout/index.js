import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import CheckoutPage from "@/sections/Checkout";
import { CustomerContainer } from "@/components/Layouts/Container";

function index() {
  return (
    <CustomerLayout>
      <CustomerContainer>
        <CheckoutPage />
      </CustomerContainer>
    </CustomerLayout>
  );
}

export default index;
