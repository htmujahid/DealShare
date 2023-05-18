import { ProductCard } from "@/components/Card";
import React from "react";
import { CategoryFilters } from "../Common";

function CategoryGridView({ products }) {
  return (
    <div className="flex min-w-[1280px] mb-16">
      {/* <CategoryFilters /> */}
      <div className="grid justify-start grid-cols-5 gap-x-4 gap-y-8 w-fit">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <>No Products found.</>
        )}
      </div>
    </div>
  );
}

export default CategoryGridView;
