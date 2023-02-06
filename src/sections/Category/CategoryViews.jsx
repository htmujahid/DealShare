import { CustomerContainer } from "@/components/Layouts/Container";
import React from "react";
import CategoryGridView from "./CategoryGridView";
import CategoryListView from "./CategoryListView";

function CategoryViews() {
    const [view, setView] = React.useState("list");
    return (
        <CustomerContainer>
            <div className="flex justify-between items-center pb-16">
                <h3 className="text-4xl font-bold">Electronics</h3>
                <div className="flex gap-6">
                    <button
                        className={`${
                            view == "list" ? "text-primary-dark" : null
                        } flex `}
                        onClick={() => setView("list")}
                    >
                        <span className="material-symbols-outlined pr-2">
                            table_rows
                        </span>
                        List View
                    </button>
                    <button
                        className={`${
                            view == "grid" ? "text-primary-dark" : null
                        } flex`}
                        onClick={() => setView("grid")}
                    >
                        <span className="material-symbols-outlined pr-2">
                            window
                        </span>
                        Grid View
                    </button>
                </div>
            </div>
            {view == "list" && <CategoryListView />}
            {view == "grid" && <CategoryGridView />}
        </CustomerContainer>
    );
}

export default CategoryViews;
