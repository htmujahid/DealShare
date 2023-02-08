import { ProductDetailedCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";
import { CategoryFilters } from "../Common";

function CategoryGridView() {
    return (
        <div className="flex justify-start min-w-[1280px] mb-16">
            <CategoryFilters />
            <div className="flex flex-wrap gap-8">
                {Array(60)
                    .fill(0)
                    .map((_, i) => (
                        <ProductDetailedCard key={i} />
                    ))}
            </div>
        </div>
    );
}

export default CategoryGridView;
