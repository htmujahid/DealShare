import Link from "next/link";
import React from "react";
import { CustomerContainer } from "../Container";
import { useProductCategories } from "@/lib/app/product";

function CustomerBottomNavbar() {
  const { categories } = useProductCategories();

  return (
    <div className="py-4 bg-black">
      <CustomerContainer>
        <div className="flex justify-between">
          {categories?.slice(0, 8).map((category, index) => {
            return (
              <div
                key={index}
                className="relative flex flex-col items-center mx-4"
              >
                <Link
                  href={`/category/${category.name}`}
                  className="font-semibold text-white"
                >
                  {category.name}
                </Link>
                {/* <div className="absolute left-0 w-full h-full top-10">
                                    {category.subCategories.map(
                                        (subCategory, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="text-xs text-black"
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
