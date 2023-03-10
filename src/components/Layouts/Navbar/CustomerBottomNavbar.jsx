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
      name: "Health",
      slung: "health",
      subCategories: ["kid", "male", "female"],
    },
    {
      name: "Home",
      slung: "home",
      subCategories: ["kid", "male", "female"],
    },
    {
      name: "Sports",
      slung: "sports",
      subCategories: ["kid", "male", "female"],
    },
    {
      name: "Garden",
      slung: "garden",
      subCategories: ["kid", "male", "female"],
    },
    {
      name: "Games",
      slung: "games",
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
