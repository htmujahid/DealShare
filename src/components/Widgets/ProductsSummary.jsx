import React from "react";
import { DoughnutChart } from "../Charts";

function ProductsSummary() {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm row-span-3">
      <div className="w-full">
        <h3 className="mb-2 text-base font-normal text-gray-500 ">
          Products Summary
        </h3>
        <DoughnutChart />
      </div>
    </div>
  );
}

export default ProductsSummary;
