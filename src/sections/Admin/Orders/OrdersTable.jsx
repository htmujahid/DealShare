import { Search } from "@/components/Form";
import { DeleteConfirmationModal } from "@/components/Modal";
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
import { useRouter } from "next/router";
import React, { useState } from "react";
import OrderUpdate from "./OrderUpdate";
import { useAdminOrders } from "@/lib/app/order";
import Link from "next/link";

function OrdersTable() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const { orders, isLoading, isError } = useAdminOrders();

  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="mt-4">
        <TableContainer>
          <div className="p-4 bg-white block flex flex-col lg:flex-row items-center justify-center gap-2 md:justify-between border-b border-gray-200 -800">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              All Orders
            </h1>
            {/* <form className="sm:pr-3" action="#" method="GET">
              <Search>Search For Orders</Search>
            </form> */}
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
                        <Th scope="col">Order Date</Th>
                        <Th scope="col">Order Total</Th>
                        <Th scope="col">Status</Th>
                        <Th scope="col"></Th>
                      </Tr>
                    </Thead>
                    <Tbody className="bg-white divide-y divide-gray-200 -800">
                      {orders?.map((order) => (
                        <Tr className="hover:bg-gray-100 -gray-700">
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
                              {order.user.firstName}
                            </div>
                            <div className="text-sm font-normal text-gray-500">
                              {order.email}
                            </div>
                          </Td>
                          <Td>
                            {new Date(order.createdAt).toLocaleDateString()}
                          </Td>
                          <Td>
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(order.invoice.amount)}
                          </Td>
                          <Td>
                            {order.paid === false ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Not Paid
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {order.status?.charAt(0).toUpperCase() +
                                  order.status?.slice(1)}
                              </span>
                            )}
                          </Td>
                          <Td className="p-4 space-x-2 whitespace-nowrap ">
                            <Link
                              href={`/admin/orders/${order._id}`}
                              className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                            >
                              Detail
                            </Link>
                            <button
                              onClick={() => setShowDeleteModal(true)}
                              className="font-medium text-red-600 dark:text-red-500 hover:underline"
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
          {/* <PaginationCount /> */}
        </TableContainer>
        {showDeleteModal && (
          <DeleteConfirmationModal
            onClose={() => setShowDeleteModal(false)}
            message="Are you sure you want to delete this order?"
          />
        )}
        {showUpdateModal && (
          <OrderUpdate setShowUpdateModal={setShowUpdateModal} />
        )}
      </div>
    </>
  );
}

export default OrdersTable;
