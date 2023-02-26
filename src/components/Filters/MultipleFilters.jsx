import React from "react";

function MultipleFilters() {
  return (
    <div class="flex items-center">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        class="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        Filter by status
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          <li class="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              for="apple"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Completed (56)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="fitbit"
              type="checkbox"
              value=""
              checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              for="fitbit"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Cancelled (56)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="dell"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              for="dell"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              In progress (56)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="asus"
              type="checkbox"
              value=""
              checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label
              for="asus"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              In review (97)
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MultipleFilters;
