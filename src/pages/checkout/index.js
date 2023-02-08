import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import { BillingInfo, OrderSummary } from "@/sections/Checkout";
import { CustomerContainer } from "@/components/Layouts/Container";
import { Breadcrumb } from "@/sections/Common";

function index() {
    return (
        <CustomerLayout>
            <CustomerContainer>
                <Breadcrumb />
                <div className="flex gap-8 my-4 mb-16">
                    <BillingInfo />
                    <OrderSummary />
                </div>
            </CustomerContainer>
        </CustomerLayout>
    );
}

export default index;
