import { ProductDetailedCard } from "@/components/Card";
import React from "react";
import { CategoryFilters } from "../Common";

function CategoryListView({ products }) {
  return (
    <div className="flex justify-start min-w-[1280px] mb-16">
      <CategoryFilters />
      <div className="flex flex-wrap gap-8">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductDetailedCard key={product._id} product={product} />
          ))
        ) : (
          <>No Products of the selected category</>
        )}
      </div>
    </div>
  );
}

export default CategoryListView;
