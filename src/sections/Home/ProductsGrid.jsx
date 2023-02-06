import { ProductCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";

function ProductsGrid() {
    return (
        <CustomerContainer>
            <div className="flex justify-center flex-wrap gap-4 py-16">
                {Array(60)
                    .fill(0)
                    .map((_, i) => (
                        <ProductCard key={i} />
                    ))}
            </div>
        </CustomerContainer>
    );
}

export default ProductsGrid;
