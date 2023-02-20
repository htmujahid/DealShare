import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";
import CategoryGridView from "./CategoryGridView";
import CategoryListView from "./CategoryListView";

function CategoryViews({ products, category, searchTerm }) {
  const [view, setView] = React.useState("grid");
  return (
    <CustomerContainer>
      <div className="flex justify-between items-center my-16">
        <h3 className="text-4xl font-bold">{category ?? searchTerm}</h3>
        <div className="flex gap-6">
          <button
            className={`${view == "grid" ? "text-primary-dark" : null} flex`}
            onClick={() => setView("grid")}
          >
            <span className="material-symbols-outlined pr-2">window</span>
            Grid View
          </button>
          <button
            className={`${view == "list" ? "text-primary-dark" : null} flex `}
            onClick={() => setView("list")}
          >
            <span className="material-symbols-outlined pr-2">table_rows</span>
            List View
          </button>
        </div>
      </div>
      <>
        {view == "grid" && <CategoryGridView products={products} />}
        {view == "list" && <CategoryListView products={products} />}
      </>
    </CustomerContainer>
  );
}

export default CategoryViews;
