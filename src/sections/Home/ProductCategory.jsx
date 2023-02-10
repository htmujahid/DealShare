import { ProductCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";

function ProductCategory({ products }) {
  // get random 5 products
  const randomProducts =
    products?.sort(() => Math.random() - 0.5).slice(0, 5) ?? [];
  return (
    <CustomerContainer>
      <h1 className="text-4xl font-bold pb-8">Product Category</h1>
      <div className="flex justify-start gap-4 pb-16">
        {randomProducts.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </CustomerContainer>
  );
}

export default ProductCategory;
