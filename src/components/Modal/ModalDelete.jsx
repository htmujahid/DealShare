import React from "react";
import { AlertButton } from "../Buttons";
import DarkButton from "../Buttons/GrayButton";
import ModalButtons from "./ModalButtons";
import ModalContainer from "./ModalContainer";
import ModalContent from "./ModalContent";
import ModalTitle from "./ModalTitle";

function ModalDelete({ setShowDeleteModal, title }) {
  return (
    <ModalContainer>
      <ModalTitle close={setShowDeleteModal} />
      <ModalContent>
        <svg
          class="mx-auto mb-4 text-gray-400 w-14 h-14 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 class="mb-5 text-lg font-normal text-gray-500 text-center">
          {title}
        </h3>
      </ModalContent>
      <ModalButtons>
        <AlertButton>Yes, I'm sure</AlertButton>
        <DarkButton onClick={() => setShowDeleteModal(false)}>
          No, cancel
        </DarkButton>
      </ModalButtons>
    </ModalContainer>
  );
}

export default ModalDelete;
