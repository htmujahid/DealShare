import { useCustomerProductsStatus } from "@/lib/app/customer";
import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from ".";
import { DarkButton } from "../Buttons";
import { Table, Tbody, Td, Th, Thead, Tr } from "../Table";

function ProductModal({ onClose, currentOrder }) {
  const { products } = useCustomerProductsStatus(currentOrder);
  return (
    <ModalContainer maxWidth={800}>
      <ModalHeader heading="Products Status" onClose={onClose} />
      <ModalBody className="flex items-center">
        <Table>
          <Thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <Tr>
              <Th scope="col" className="px-6 py-3">
                Product Name
              </Th>
              <Th scope="col" className="px-6 py-3">
                Price
              </Th>
              <Th scope="col" className="px-6 py-3">
                Qty
              </Th>
              <Th scope="col" className="px-6 py-3">
                Threshold
              </Th>
              <Th scope="col" className="px-6 py-3">
                %
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {products &&
              products?.map((product, index) => (
                <>
                  <Tr className="bg-white border-b hover:bg-gray-50">
                    <Td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {product.product?.name}
                    </Td>
                    <Td className="px-6 py-4">
                      {product.product.sellingPrice}
                    </Td>
                    <Td className="px-6 py-4">{product.totalQuantity}</Td>
                    <Td className="px-6 py-4">
                      {product.product.poolThreshold}
                    </Td>
                    <Td className="px-6 py-4">
                      {(
                        (product.totalQuantity /
                          product.product.poolThreshold) *
                        100
                      ).toPrecision(4) || 0}{" "}
                      %
                    </Td>
                  </Tr>
                </>
              ))}
          </Tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <DarkButton onClick={onClose} variant="primary">
          Close
        </DarkButton>
      </ModalFooter>
    </ModalContainer>
  );
}

export default ProductModal;
