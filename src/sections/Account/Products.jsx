import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/Table";
import React from "react";

function Products() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th scope="col" className="px-6 py-3">
            Product name
          </Th>
          <Th scope="col" className="px-6 py-3">
            Date
          </Th>
          <Th scope="col" className="px-6 py-3">
            Status
          </Th>
          <Th scope="col" className="px-6 py-3 text-right">
            Price
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Tr className="bg-white border-b hover:bg-gray-50">
              <Td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </Td>
              <Td className="px-6 py-4">02-03-2023</Td>
              <Td className="px-6 py-4">70%</Td>
              <Td className="px-6 py-4 text-right">$2999</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
}

export default Products;
