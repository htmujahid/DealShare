import React, { useState } from "react";
import { CustomerLayout } from "@/components/Layouts";
import { CategoryViews } from "@/sections/Category";
import { useRouter } from "next/router";
import { stringToTitleCase, useCategoryProducts } from "@/lib/app/product";
import Pagination from "@/components/Pagination/Pagination";

function index() {
  const ITEMSPERPAGE = 10;
  const [page, setPage] = useState(0);

  const router = useRouter();
  const { products } = useCategoryProducts(
    stringToTitleCase(router.query.category),
    page,
    ITEMSPERPAGE
  );

  return (
    <CustomerLayout>
      <CategoryViews
        products={products?.paginatedResults}
        category={stringToTitleCase(router.query.category)}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={Math.ceil(products?.count / ITEMSPERPAGE)}
      />
    </CustomerLayout>
  );
}

export default index;
