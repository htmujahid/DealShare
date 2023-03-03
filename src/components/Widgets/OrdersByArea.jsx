import React from "react";
import { BarChart } from "../Charts";
function OrdersByArea() {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm row-span-2">
      <div className="w-full">
        <h3 className="mb-2 text-base font-normal text-gray-500 ">
          Pools by Products
        </h3>
        <BarChart />
      </div>
    </div>
  );
}

export default OrdersByArea;
