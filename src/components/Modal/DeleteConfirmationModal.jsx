import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from ".";
import { AlertButton, DarkButton } from "../Buttons";

function DeleteConfirmationModal({ onClose, message, onConfirm }) {
  return (
    <ModalContainer maxWidth={500}>
      <ModalHeader heading="Delete Item" onClose={onClose} />
      <ModalBody className="flex items-center">{message}</ModalBody>
      <ModalFooter>
        <AlertButton
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Yes, I'm sure
        </AlertButton>
        <DarkButton onClick={onClose} variant="primary">
          No, Cancel
        </DarkButton>
      </ModalFooter>
    </ModalContainer>
  );
}

export default DeleteConfirmationModal;
