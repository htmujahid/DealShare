import { ProductCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";

function ProductsGrid({ products }) {
  return (
    <CustomerContainer>
      <div className="grid grid-cols-5 justify-center flex-wrap gap-4 py-16">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </CustomerContainer>
  );
}

export default ProductsGrid;
