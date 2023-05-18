import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/Table";
import { useCustomerOrders } from "@/lib/app/order";
import React from "react";

function Orders() {
  const { orders } = useCustomerOrders();

  if (!orders) {
    return null;
  }

  return (
    <Table>
      <Thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <Tr>
          <Th scope="col" className="px-6 py-3">
            Order ID
          </Th>
          <Th scope="col" className="px-6 py-3">
            Price
          </Th>
          <Th scope="col" className="px-6 py-3">
            Status
          </Th>
          <Th scope="col" className="px-6 py-3">
            Items
          </Th>
          <Th scope="col" className="px-6 py-3">
            Order Date
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders &&
          orders.map((order, index) => (
            <Tr className="bg-white border-b hover:bg-gray-50">
              <Td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {order._id}
              </Td>
              <Td className="px-6 py-4">{order.invoice.amount}</Td>
              <Td className="px-6 py-4">
                {order.paid ? (
                  <span className="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                    Paid
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                    Unpaid
                  </span>
                )}
              </Td>
              <Td className="px-6 py-4">{order.products.length}</Td>
              <Td className="px-6 py-4 text-right">
                {new Date(order.createdAt).toLocaleDateString()}
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
}

export default Orders;
