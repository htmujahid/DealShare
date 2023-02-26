import { CustomerLayout } from "@/components/Layouts";
import Pagination from "@/components/Pagination/Pagination";
import { useSearchedProducts } from "@/lib/app/product";
import { CategoryViews } from "@/sections/Category";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SearchPage() {
  const ITEMSPERPAGE = 10;
  const [page, setPage] = useState(0);

  const router = useRouter();
  const { products } = useSearchedProducts(
    router.query.searchTerm,
    page,
    ITEMSPERPAGE
  );

  return (
    <CustomerLayout>
      <CategoryViews
        products={products?.paginatedResults}
        searchTerm={router.query.searchTerm}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={Math.ceil(products?.count / ITEMSPERPAGE)}
      />
    </CustomerLayout>
  );
}

export default SearchPage;
