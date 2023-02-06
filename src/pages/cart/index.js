import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import { CustomerContainer } from "@/components/Layouts/Container";
import { Breadcrumb } from "@/sections/Common";
import { ShoppingCart } from "@/sections/Cart";
function index() {
    return (
        <CustomerLayout>
            <CustomerContainer>
                <Breadcrumb />
                <ShoppingCart />
            </CustomerContainer>
        </CustomerLayout>
    );
}

export default index;
