import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import { CategoryViews } from "@/sections/Category";
import { useRouter } from "next/router";
import { stringToTitleCase, useCategoryProducts } from "@/lib/app/product";

function index() {
  const router = useRouter();
  const { products } = useCategoryProducts(
    stringToTitleCase(router.query.category),
    60
  );

  return (
    <CustomerLayout>
      <CategoryViews
        products={products}
        category={stringToTitleCase(router.query.category)}
      />
    </CustomerLayout>
  );
}

export default index;
