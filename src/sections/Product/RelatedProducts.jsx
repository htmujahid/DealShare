import { ProductCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";

function RelatedProducts() {
    return (
        <CustomerContainer>
            <h1 className="text-4xl font-bold pb-8">Related Products</h1>
            <div className="flex justify-start gap-4 pb-16">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <ProductCard key={i} />
                    ))}
            </div>
        </CustomerContainer>
    );
}

export default RelatedProducts;
