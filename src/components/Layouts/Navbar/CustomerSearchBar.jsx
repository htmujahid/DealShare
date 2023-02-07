import Link from "next/link";
import React from "react";
import { CustomerContainer } from "../Container";

function CustomerSearchBar() {
    const categories = [
        "clothes",
        "shoes",
        "food",
        "computer",
        "furniture",
        "kids",
        "beauty",
        "healthcare",
        "entertainment",
        "smartphones",
        "electrnoics",
    ];
    return (
        <CustomerContainer>
            <div className="flex py-6 justify-between items-center">
                <div className="flex gap-6 items-center opacity-0">
                    <div>
                        {/* account icons */}
                        <span className="material-symbols-outlined">
                            person
                        </span>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </div>
                </div>
                <form className="flex gap-6 py-3 px-6 border-2 border rounded-2xl">
                    <select
                        name=""
                        id=""
                        className="font-bold focus:outline-none"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option value={category} key={index}>
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </option>
                        ))}
                    </select>
                    <span className="h-full border-l-2"></span>
                    <input
                        type="text"
                        className="w-72 focus:outline-none"
                        placeholder="Search Products, categories ..."
                    />
                    <button className="flex items-center" type="submit">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </form>
                <div className="flex gap-6 items-center">
                    <Link href="/account">
                        <span className="material-symbols-outlined">
                            person
                        </span>
                    </Link>
                    <Link href="/cart">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </Link>
                </div>
            </div>
        </CustomerContainer>
    );
}

export default CustomerSearchBar;
