import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import {
  ProductDetailedDescription,
  RelatedProducts,
} from "@/sections/Product";
import { Breadcrumb } from "@/sections/Common";
import { useProduct, useRelatedProducts } from "@/lib/app/product";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  const { product } = useProduct(router.query.id);
  const { products } = useRelatedProducts(product?._id, product?.category, 5);
  return (
    <CustomerLayout>
      <Breadcrumb />
      <ProductDetailedDescription product={product} />
      <RelatedProducts products={products} />
    </CustomerLayout>
  );
}

export default index;
