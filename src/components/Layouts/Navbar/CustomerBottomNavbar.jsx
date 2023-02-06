import Link from "next/link";
import React from "react";
import { CustomerContainer } from "../Container";

function CustomerBottomNavbar() {
    const categories = [
        {
            name: "Electronics",
            slung: "electronics",
            subCategories: [
                "Smartphones",
                "Laptops",
                "Tablets",
                "TVs",
                "Cameras",
                "Headphones",
                "Video Games",
                "Wearable Tech",
                "Accessories",
            ],
        },
        {
            name: "Clothing",
            slung: "clothing",
            subCategories: ["kid", "male", "female"],
        },
        {
            name: "Shoes",
            slung: "shoes",
            subCategories: ["kid", "male", "female"],
        },
        {
            name: "Health & Beauty",
            slung: "health-beauty",
            subCategories: ["kid", "male", "female"],
        },
        {
            name: "Home & Living",
            slung: "home-living",
            subCategories: ["kid", "male", "female"],
        },
        {
            name: "Sports & Travel",
            slung: "sports-travel",
            subCategories: ["kid", "male", "female"],
        },
        {
            name: "Groceries",
            slung: "groceries",
            subCategories: ["kid", "male", "female"],
        },
        {
            name: "Jewelry",
            slung: "jewelry",
            subCategories: ["kid", "male", "female"],
        },
    ];
    return (
        <div className="bg-black py-4">
            <CustomerContainer>
                <div className="flex justify-between">
                    {categories.map((category, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center mx-4 relative"
                            >
                                <Link
                                    href={`/category/${category.slung}`}
                                    className="text-white font-semibold"
                                >
                                    {category.name}
                                </Link>
                                {/* <div className="absolute top-10 left-0 w-full h-full">
                                    {category.subCategories.map(
                                        (subCategory, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="text-black text-xs"
                                                >
                                                    {subCategory}
                                                </div>
                                            );
                                        }
                                    )}
                                </div> */}
                            </div>
                        );
                    })}
                </div>
            </CustomerContainer>
        </div>
    );
}

export default CustomerBottomNavbar;
