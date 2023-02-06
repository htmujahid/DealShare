import { ProductCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";
import { CategoryFilters } from "../Common";

function CategoryListView() {
    return (
        <div className="flex justify-between min-w-[1280px] mb-16">
            <CategoryFilters />
            <div className="flex justify-start flex-wrap gap-4 w-fit">
                {Array(60)
                    .fill(0)
                    .map((_, i) => (
                        <ProductCard key={i} />
                    ))}
            </div>
        </div>
    );
}

export default CategoryListView;
