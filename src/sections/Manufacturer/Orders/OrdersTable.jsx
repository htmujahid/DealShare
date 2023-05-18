import { Input, Search } from "@/components/Form";
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
import { useManufacturerOrders } from "@/lib/app/order";
import { completeOrder } from "@/lib/app/order/requests";

function OrdersTable() {
  const { orders } = useManufacturerOrders();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const router = useRouter();

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
                        <Th scope="col">Product Name</Th>
                        <Th scope="col">Order Date</Th>
                        <Th scope="col">Order Total</Th>
                        <Th scope="col">Price</Th>
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
                              {order?.product?.name}
                            </div>
                            <div className="text-sm font-normal text-gray-500">
                              {order?.product?.category}
                            </div>
                          </Td>
                          <Td>{new Date().toLocaleDateString()}</Td>
                          <Td>{order.totalQuantity}</Td>
                          <Td>{order.product.sellingPrice}</Td>
                          <Td>{order.status}</Td>

                          <Td className="p-4 space-x-2 whitespace-nowrap ">
                            <Input
                              type="checkbox"
                              checked={order.status === "completed"}
                              onChange={() =>
                                completeOrder(order._id, {
                                  status: order.status,
                                })
                              }
                            />
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
            setShowDeleteModal={setShowDeleteModal}
            title="Are you sure you want to delete this order?"
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
