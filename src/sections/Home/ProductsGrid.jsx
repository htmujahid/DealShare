import { ProductCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";

function ProductsGrid({ products }) {
  return (
    <CustomerContainer>
      <div className="grid grid-cols-4 justify-center flex-wrap gap-12 py-16">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </CustomerContainer>
  );
}

export default ProductsGrid;
