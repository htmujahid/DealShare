import { CustomerLayout } from "@/components/Layouts";
import BlockLoader from "@/components/Loaders/BlockLoader";
import Pagination from "@/components/Pagination/Pagination";
import { useSearchedProducts } from "@/lib/app/product";
import { CategoryViews } from "@/sections/Category";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SearchProducts() {
  const ITEMSPERPAGE = 10;
  const [page, setPage] = useState(0);

  const router = useRouter();
  const { loading, products } = useSearchedProducts(
    router.query.searchTerm,
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
            searchTerm={router.query.searchTerm}
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

export default SearchProducts;
