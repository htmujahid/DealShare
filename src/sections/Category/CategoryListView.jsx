import { ProductDetailedCard } from "@/components/Card";
import React from "react";

function CategoryListView({ products }) {
  return (
    <div className="flex justify-start min-w-[1280px] mb-16">
      {/* <CategoryFilters /> */}
      <div className="flex flex-wrap justify-center gap-8">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductDetailedCard key={product._id} product={product} />
          ))
        ) : (
          <>No Products found.</>
        )}
      </div>
    </div>
  );
}

export default CategoryListView;
