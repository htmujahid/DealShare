import { PrimaryButton } from "@/components/Buttons";
import { StatsSummary } from "@/components/Widgets";
import { useRouter } from "next/router";
import React, { useState } from "react";

function ProductsSummary() {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            Products Summary
          </h1>

          <PrimaryButton
            onClick={() => {
              router.push("/admin/products/create");
            }}
          >
            Add New Product
          </PrimaryButton>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <StatsSummary
            type="single"
            value={[
              { title: "All Products", value: 350 },
              { title: "Active Products", value: 325 },
            ]}
          />
          <StatsSummary
            value={[
              { title: "Low Stock Alert", value: 13 },
              { title: "Out of Stock", value: 0 },
            ]}
          />
          <StatsSummary
            value={[
              { title: "1 Star Rating", value: 3 },
              { title: "5 Star Rating", value: 5 },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default ProductsSummary;
