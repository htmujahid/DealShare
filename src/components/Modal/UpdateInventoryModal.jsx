import { updateInventory } from "@/lib/app/product/requests";
import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from ".";
import { AlertButton, DarkButton } from "../Buttons";
import { useState } from "react";
import { Input } from "../Form";

function UpdateInventoryModal({ onClose, product }) {
  const [inventoy, setInventory] = useState({
    quantity: product.inventory.quantity,
  });
  return (
    <ModalContainer maxWidth={300}>
      <ModalHeader heading="Update Quantity" onClose={onClose} />
      <ModalBody className="flex items-center">
        <Input
          placeholder="Quantity in Stock"
          type="number"
          divClassName="w-full"
          className="w-full"
          min="0"
          value={inventoy.quantity}
          onChange={(e) =>
            setInventory({ ...inventoy, quantity: e.target.value })
          }
        />
      </ModalBody>
      <ModalFooter>
        <AlertButton
          onClick={() => {
            updateInventory(product._id, inventoy);
            onClose();
          }}
        >
          Update
        </AlertButton>
        <DarkButton onClick={onClose} variant="primary">
          Close
        </DarkButton>
      </ModalFooter>
    </ModalContainer>
  );
}

export default UpdateInventoryModal;
