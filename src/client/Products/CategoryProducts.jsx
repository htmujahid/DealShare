import React, { useState } from "react";
import { CustomerLayout } from "@/components/Layouts";
import { CategoryViews } from "@/sections/Category";
import { useRouter } from "next/router";
import { stringToTitleCase, useCategoryProducts } from "@/lib/app/product";
import Pagination from "@/components/Pagination/Pagination";
import BlockLoader from "@/components/Loaders/BlockLoader";

function CategoryProducts() {
  const ITEMSPERPAGE = 10;
  const [page, setPage] = useState(0);

  const router = useRouter();
  const { loading, products } = useCategoryProducts(
    stringToTitleCase(router.query.category),
    page,
    ITEMSPERPAGE
  );

  return (
    <CustomerLayout>
      {loading ? (
        <BlockLoader />
      ) : (
        <>
          <CategoryViews
            products={products?.paginatedResults}
            category={stringToTitleCase(router.query.category)}
          />
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={Math.ceil(products?.count / ITEMSPERPAGE)}
          />
        </>
      )}
    </CustomerLayout>
  );
}

export default CategoryProducts;
