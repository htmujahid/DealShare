import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/Table";
import React from "react";

function Orders() {
  return (
    <Table>
      <Thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <Tr>
          <Th scope="col" className="px-6 py-3">
            Product name
          </Th>
          <Th scope="col" className="px-6 py-3">
            Color
          </Th>
          <Th scope="col" className="px-6 py-3">
            Category
          </Th>
          <Th scope="col" className="px-6 py-3">
            Qty
          </Th>
          <Th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Tr className="bg-white border-b hover:bg-gray-50">
              <Td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </Td>
              <Td className="px-6 py-4">Sliver</Td>
              <Td className="px-6 py-4">Laptop</Td>
              <Td className="px-6 py-4">3</Td>
              <Td className="px-6 py-4 text-right">
                <button className="font-medium text-primary-dark hover:underline">
                  Cancel
                </button>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
}

export default Orders;
