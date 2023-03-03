import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from ".";
import { Button } from "../Form";

function DeleteConfirmationModal({ onClose, message, onConfirm }) {
  return (
    <ModalContainer>
      <ModalHeader heading="Delete Item" onClose={onClose} />
      <ModalBody>{message}</ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          variant="primary"
        >
          Confirm
        </Button>
      </ModalFooter>
    </ModalContainer>
  );
}

export default DeleteConfirmationModal;
