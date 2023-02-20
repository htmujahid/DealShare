import { CustomerLayout } from "@/components/Layouts";
import { useSearchedProducts } from "@/lib/app/product";
import { CategoryViews } from "@/sections/Category";
import { useRouter } from "next/router";
import React from "react";

function SearchPage() {
  const router = useRouter();
  const { products } = useSearchedProducts(router.query.searchTerm);

  return (
    <CustomerLayout>
      <CategoryViews products={products} searchTerm={router.query.searchTerm} />
    </CustomerLayout>
  );
}

export default SearchPage;
