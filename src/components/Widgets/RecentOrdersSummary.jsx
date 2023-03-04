import Head from "next/head";
import React from "react";
import { GeneralFilter } from "../Filters";

function RecentOrdersSummary() {
  const [activeTab, setActiveTab] = React.useState("products");
  return (
    <>
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6">
        <h3 class="flex items-center mb-4 text-lg font-semibold text-gray-900 ">
          Statistics this month
        </h3>

        <div class="sm:hidden">
          <label for="tabs" class="sr-only">
            Select tab
          </label>
          <select
            id="tabs"
            class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  -primary-500 -primary-500"
          >
            <option>Statistics</option>
            <option>Services</option>
            <option>FAQ</option>
          </select>
        </div>
        <ul
          class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <li class="w-full">
            <button
              onClick={() => setActiveTab("products")}
              class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none -gray-600"
            >
              Top products
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => setActiveTab("customers")}
              class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none -gray-600"
            >
              Top Customers
            </button>
          </li>
        </ul>
        <div id="fullWidthTabContent" class="border-t border-gray-200 -600">
          {activeTab === "products" ? (
            <div class="pt-4">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10 rounded-full"
                        src=""
                      />
                      <div class="ml-3">
                        <p class="font-medium text-gray-900 truncate ">
                          iPhone 14 Pro
                        </p>
                        <div class="flex items-center justify-end flex-1 text-sm text-gree">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            ></path>
                          </svg>
                          2.5%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $445,467
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/imac.png"
                      />
                      <div class="ml-3">
                        <p class="font-medium text-gray-900 truncate ">
                          Apple iMac 27"
                        </p>
                        <div class="flex items-center justify-end flex-1 text-sm text-gree">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            ></path>
                          </svg>
                          12.5%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $256,982
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10 "
                        src="/images/products/watch.png"
                      />
                      <div class="ml-3">
                        <p class="font-medium text-gray-900 truncate ">
                          Apple Watch SE
                        </p>
                        <div class="flex items-center justify-end flex-1 text-sm text-red-600 -500">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            ></path>
                          </svg>
                          1.35%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $201,869
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10 "
                        src="/images/products/watch.png"
                      />
                      <div class="ml-3">
                        <p class="font-medium text-gray-900 truncate ">
                          Apple Watch SE
                        </p>
                        <div class="flex items-center justify-end flex-1 text-sm text-red-600 -500">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            ></path>
                          </svg>
                          1.35%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $201,869
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10 "
                        src="/images/products/watch.png"
                      />
                      <div class="ml-3">
                        <p class="font-medium text-gray-900 truncate ">
                          Apple Watch SE
                        </p>
                        <div class="flex items-center justify-end flex-1 text-sm text-red-600 -500">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            ></path>
                          </svg>
                          1.35%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $201,869
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/ipad.png"
                      />
                      <div class="ml-3">
                        <p class="font-medium text-gray-900 truncate ">
                          Apple iPad Air
                        </p>
                        <div class="flex items-center justify-end flex-1 text-sm text-gree">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            ></path>
                          </svg>
                          12.5%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $103,967
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/imac.png"
                      />
                      <div class="ml-3">
                        <p class="font-medium text-gray-900 truncate ">
                          Apple iMac 24"
                        </p>
                        <div class="flex items-center justify-end flex-1 text-sm text-red-600 -500">
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            ></path>
                          </svg>
                          2%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $98,543
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div class="pt-4">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/neil-sims.png"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate ">
                        Neil Sims
                      </p>
                      <p class="text-sm text-gray-500 tru">
                        email@flowbite.com
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $3320
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/bonnie-green.png"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate ">
                        Bonnie Green
                      </p>
                      <p class="text-sm text-gray-500 tru">
                        email@flowbite.com
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $2467
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/michael-gough.png"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate ">
                        Michael Gough
                      </p>
                      <p class="text-sm text-gray-500 tru">
                        email@flowbite.com
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $2235
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/thomas-lean.png"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate ">
                        Thomes Lean
                      </p>
                      <p class="text-sm text-gray-500 tru">
                        email@flowbite.com
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $1842
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/lana-byrd.png"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate ">
                        Lana Byrd
                      </p>
                      <p class="text-sm text-gray-500 tru">
                        email@flowbite.com
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $1044
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/lana-byrd.png"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate ">
                        Lana Byrd
                      </p>
                      <p class="text-sm text-gray-500 tru">
                        email@flowbite.com
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $1044
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/lana-byrd.png"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate ">
                        Lana Byrd
                      </p>
                      <p class="text-sm text-gray-500 tru">
                        email@flowbite.com
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      $1044
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div class="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6">
          <GeneralFilter />
          <div class="flex-shrink-0">
            <a
              href="#"
              class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primar sm:text-sm hover:bg-gray-100 -500 -gra"
            >
              Full Report
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
    </>
  );
}

export default RecentOrdersSummary;