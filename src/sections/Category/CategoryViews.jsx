import { CustomerContainer } from "@/components/Layouts/Container";
import { stringToTitleCase, useCategoryProducts } from "@/lib/app/product";
import { useRouter } from "next/router";
import React from "react";
import CategoryGridView from "./CategoryGridView";
import CategoryListView from "./CategoryListView";

function CategoryViews() {
  const router = useRouter();
  const { products } = useCategoryProducts(
    stringToTitleCase(router.query.category),
    60
  );

  const [view, setView] = React.useState("list");
  return (
    <CustomerContainer>
      <div className="flex justify-between items-center pb-16">
        <h3 className="text-4xl font-bold">
          {stringToTitleCase(router.query.category)}
        </h3>
        <div className="flex gap-6">
          <button
            className={`${view == "list" ? "text-primary-dark" : null} flex `}
            onClick={() => setView("list")}
          >
            <span className="material-symbols-outlined pr-2">table_rows</span>
            List View
          </button>
          <button
            className={`${view == "grid" ? "text-primary-dark" : null} flex`}
            onClick={() => setView("grid")}
          >
            <span className="material-symbols-outlined pr-2">window</span>
            Grid View
          </button>
        </div>
      </div>
      <>
        {view == "list" && <CategoryListView products={products} />}
        {view == "grid" && <CategoryGridView products={products} />}
      </>
    </CustomerContainer>
  );
}

export default CategoryViews;
