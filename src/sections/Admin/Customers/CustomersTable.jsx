import { Search } from "@/components/Form";
import { ModalDelete } from "@/components/Modal";
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
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CustomerUpdate from "./CustomerUpdate";

function CustomersTable() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const router = useRouter();

  return (
    <>
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
                        <Th scope="col">Customer Name</Th>
                        <Th scope="col">Email</Th>
                        <Th scope="col">Phone</Th>
                        <Th scope="col">Orders</Th>
                        <Th scope="col">Orders Total</Th>
                        <Th scope="col">Customer Since</Th>
                        <Th scope="col"></Th>
                      </Tr>
                    </Thead>
                    <Tbody className="bg-white divide-y divide-gray-200 -800">
                      {Array(20)
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
                                  for="checkbox-{{ .id }}"
                                  className="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </Td>
                            <Td>
                              <div className="text-base font-semibold text-gray-900 ">
                                John Doe
                              </div>
                            </Td>
                            <Td>johndoe@email.com</Td>
                            <Td>03024572890</Td>
                            <Td>10</Td>
                            <Td>34000</Td>
                            <Td>10-11-2022</Td>
                            <Td className="p-4 space-x-2 whitespace-nowrap ">
                              <button
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                onClick={() => setShowUpdateModal(true)}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => setShowDeleteModal(true)}
                                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Remove
                              </button>
                            </Td>
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
        {showDeleteModal && (
          <ModalDelete
            setShowDeleteModal={setShowDeleteModal}
            title="Are you sure you want to delete this customer?"
          />
        )}
        {showUpdateModal && (
          <CustomerUpdate setShowUpdateModal={setShowUpdateModal} />
        )}
      </div>
    </>
  );
}

export default CustomersTable;
