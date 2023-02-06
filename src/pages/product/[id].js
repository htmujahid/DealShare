import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import {
    ProductDetailedDescription,
    RelatedProducts,
} from "@/sections/Product";
import { Breadcrumb } from "@/sections/Common";

function index() {
    return (
        <CustomerLayout>
            <Breadcrumb />
            <ProductDetailedDescription />
            <RelatedProducts />
        </CustomerLayout>
    );
}

export default index;
