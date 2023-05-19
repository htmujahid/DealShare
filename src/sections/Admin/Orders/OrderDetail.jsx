import { GrayButton, PrimaryButton } from "@/components/Buttons";
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
import { useOrderDetails } from "@/lib/app/order";
import { useRouter } from "next/router";

function OrderDetail() {
  const router = useRouter();
  const { orderDetails } = useOrderDetails(router.query.orderId);
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <h1 className="font-semibold text-gray-900 ">
              Order Number #{router.query.orderId}
            </h1>
            <p>
              Order date:{" "}
              <span className="font-semibold">
                {orderDetails &&
                  new Date(orderDetails[0].createdAt).toLocaleDateString()}
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            {/*<PrimaryButton>Mark as Completed</PrimaryButton>*/}
            {/*<GrayButton>Cancel</GrayButton>*/}
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-2">
          <GeneralSummary
            title="Customer Details"
            subtitle={
              orderDetails &&
              orderDetails[0].invoice.billingInfo.firstName +
                " " +
                orderDetails[0].invoice.billingInfo.lastName
            }
            value={[
              {
                title: "Phone",
                value:
                  orderDetails &&
                  orderDetails[0].invoice.billingInfo.phoneNumber,
              },
              {
                title: "Email",
                value:
                  orderDetails && orderDetails[0].invoice.billingInfo.email,
              },
            ]}
          />
          <GeneralSummary
            value={[
              {
                title: "Home Address",
                value:
                  orderDetails && orderDetails[0].invoice.billingInfo.address,
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-4">
        <TableContainer>
          <div className="flex flex-col items-center justify-center block gap-2 p-4 bg-white border-b border-gray-200 lg:flex-row md:justify-between -800">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              All Orders
            </h1>
            {/* <form className="sm:pr-3" action="#" method="GET">
              <Search>Search For Products</Search>
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
                        <Th scope="col">Manufacturer Name</Th>
                        <Th scope="col">Price</Th>
                        <Th scope="col">Qty</Th>
                        <Th scope="col">Order Total</Th>
                      </Tr>
                    </Thead>
                    <Tbody className="bg-white divide-y divide-gray-200 -800">
                      {orderDetails &&
                        orderDetails[0].products.map((product, index) => (
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
                                {product.name}
                              </div>
                              <div className="text-sm font-normal text-gray-500">
                                {product.category}
                              </div>
                            </Td>
                            <Td>{product.manufacturer.firstName}</Td>
                            <Td>{product.price}</Td>
                            <Td>{product.quantity}</Td>
                            <Td>{product.price * product.quantity}</Td>
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
      </div>
    </>
  );
}

export default OrderDetail;
