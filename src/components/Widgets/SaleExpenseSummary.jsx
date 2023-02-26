import React from "react";
import LineChart from "../Charts/LineChart";
import { GeneralFilter } from "../Filters";

function SaleExpenseSummary() {
  return (
    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 col-span-2">
      <div class="flex items-center justify-between mb-4">
        <div class="flex-shrink-0">
          <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl ">
            $45,385
          </span>
          <h3 class="text-base font-light text-gray-500 ">Sales this week</h3>
        </div>
        <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 ">
          12.5%
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <LineChart />
      <div class="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6">
        <GeneralFilter />
        <div class="flex-shrink-0">
          <a
            href="#"
            class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100"
          >
            Sales Report
            <svg
              class="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SaleExpenseSummary;
