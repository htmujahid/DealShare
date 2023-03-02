import { GrayButton, PrimaryButton } from "@/components/Buttons";
import { Input, Select } from "@/components/Form";
import {
  ModalButtons,
  ModalContainer,
  ModalContent,
  ModalTitle,
} from "@/components/Modal";
import React from "react";

const CUSTOMERS = [
  {
    id: 0,
    label: "Select Customer",
  },
  {
    id: 1,
    label: "John Doe",
    value: "John Doe",
  },
  {
    id: 2,
    label: "Jane Doe",
    value: "Jane Doe",
  },
  {
    id: 3,
    label: "John Smith",
    value: "John Smith",
  },
  {
    id: 4,
    label: "Jane Smith",
    value: "Jane Smith",
  },
];

const PROCUCTS = [
  {
    id: 0,
    label: "Select Product",
  },
  {
    id: 1,
    label: "Product 1",
    value: "Product 1",
  },
  {
    id: 2,
    label: "Product 2",
    value: "Product 2",
  },
  {
    id: 3,
    label: "Product 3",
    value: "Product 3",
  },
  {
    id: 4,
    label: "Product 4",
    value: "Product 4",
  },
];

function OrderUpdate({ setShowUpdateModal }) {
  return (
    <ModalContainer>
      <ModalTitle title="Add New Order" close={setShowUpdateModal} />
      <ModalContent>
        <Select label="Customer" options={CUSTOMERS} className="w-full" />
        <Select label="Customer" options={PROCUCTS} className="w-full" />
        <Input label="Quantity" type="number" className="w-full" min="0" />
      </ModalContent>
      <ModalButtons>
        <PrimaryButton>Create Order</PrimaryButton>
        <GrayButton
          onClick={() => {
            setShowUpdateModal(false);
          }}
        >
          Cancel
        </GrayButton>
      </ModalButtons>
    </ModalContainer>
  );
}

export default OrderUpdate;
