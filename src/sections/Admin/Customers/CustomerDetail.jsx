import { Search } from "@/components/Form";
import { PaginationCount } from "@/components/Pagination";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@/components/Table";
import { GeneralSummary, StatsSummary } from "@/components/Widgets";
import React from "react";

function CustomerDetail() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            Customers Summary
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <GeneralSummary
            title="Jaine Doe"
            subtitle="Customer Since 2021-01-01"
            value={[
              { title: "Phone", value: "03126578123" },
              { title: "Email", value: "jaine@email.com" },
            ]}
          />
          <GeneralSummary
            value={[
              {
                title: "Home Address",
                value: `
                123, Street Name, City Name, State Name, Country Name
              `,
              },
            ]}
          />
          <GeneralSummary
            value={[
              {
                title: "Billing Address",
                value: `
                Home town, City Name, State Name, Country Name
              `,
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-4">
        <TableContainer>
          <div className="p-4 bg-white block flex flex-col lg:flex-row items-center justify-center gap-2 md:justify-between border-b border-gray-200 -800">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              All Customers
            </h1>
            <form className="sm:pr-3" action="#" method="GET">
              <Search>Search For Products</Search>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow">
                  <Table>
                    <Thead className="bg-gray-100">
                      <Tr>
                        <Th scope="col"></Th>
                        <Th scope="col">Order ID</Th>
                        <Th scope="col">Price</Th>
                        <Th scope="col">Order Date</Th>
                        <Th scope="col">Action</Th>
                        <Th scope="col">Status</Th>
                      </Tr>
                    </Thead>
                    <Tbody className="bg-white divide-y divide-gray-200 -800">
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <Tr className="hover:bg-gray-100">
                            <Td className="w-4 p-4">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-{{ .id }}"
                                  aria-describedby="checkbox-1"
                                  type="checkbox"
                                  className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 -primary-600 -gray-800"
                                />
                                <label
                                  htmlFor="checkbox-{{ .id }}"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </Td>
                            <Td>
                              <div className="text-base font-semibold text-gray-900 ">
                                #1212654
                              </div>
                            </Td>
                            <Td>3000</Td>
                            <Td>20-10-2022</Td>
                            <Td>mark as completed</Td>
                            <Td>published</Td>
                          </Tr>
                        ))}
                    </Tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <PaginationCount />
        </TableContainer>
      </div>
    </>
  );
}

export default CustomerDetail;
