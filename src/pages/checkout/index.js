import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import { BillingInfo, OrderSummary } from "@/sections/Checkout";
import { CustomerContainer } from "@/components/Layouts/Container";

function index() {
  return (
    <CustomerLayout>
      <CustomerContainer>
        <div className="flex gap-8 my-4 mb-16">
          <BillingInfo />
          <OrderSummary />
        </div>
      </CustomerContainer>
    </CustomerLayout>
  );
}

export default index;
