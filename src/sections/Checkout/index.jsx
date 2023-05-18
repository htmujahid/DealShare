import React, { useState } from "react";
import BillingInfo from "./BillingInfo";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage() {
  const [addressDetails, setAddressDetails] = useState(["", "", "", ""]);

  return (
    <div>
      <div className="flex gap-8 my-4 my-16">
        <BillingInfo
          addressDetails={addressDetails}
          setAddressDetails={setAddressDetails}
        />
        <OrderSummary addressDetails={addressDetails} />
      </div>
    </div>
  );
}
