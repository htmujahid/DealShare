import { ProductCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";

function RelatedProducts({ products }) {
  return (
    products?.length > 0 && (
      <CustomerContainer>
        <h1 className="text-4xl font-bold pb-8">Related Products</h1>
        <div className="flex justify-start gap-4 pb-16">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </CustomerContainer>
    )
  );
}

export default RelatedProducts;
