import { ProductCard } from "@/components/Card";
import React from "react";
import { CategoryFilters } from "../Common";

function CategoryGridView({ products }) {
  return (
    <div className="flex justify-between min-w-[1280px] mb-16">
      <CategoryFilters />
      <div className="flex justify-start flex-wrap gap-4 w-fit">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <>No Products of the selected category</>
        )}
      </div>
    </div>
  );
}

export default CategoryGridView;
