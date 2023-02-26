import React, { useState } from "react";

function GeneralFilter() {
  return (
    <select
      class="flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 focus:outline-none"
      type="button"
      data-dropdown-toggle="weekly-sales-dropdown"
    >
      <option class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Today
      </option>
      <option class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Yesterday
      </option>
      <option class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Last 7 days
      </option>
      <option class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Last 30 days
      </option>
      <option class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Last 90 days
      </option>
    </select>
  );
}

export default GeneralFilter;
