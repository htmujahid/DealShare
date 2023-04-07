import { GrayButton, PrimaryButton } from "@/components/Buttons";
import { Input } from "@/components/Form";
import {
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
} from "@/components/Modal";
import React from "react";

function ManufacturerNew({ setShowAddModal }) {
  return (
    <ModalContainer>
      <ModalHeader
        heading="Add New Manufacturer"
        onClose={() => setShowAddModal(false)}
      />
      <ModalBody>
        <form action="#">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-6">
              <Input placeholder="Bonnie" className="w-full"></Input>
              <Input placeholder="Heniv" className="w-full"></Input>
            </div>
            <Input
              type="email"
              placeholder="bonnei@email.com"
              className="w-full"
            ></Input>
            <Input
              type="tel"
              placeholder="1234567890"
              className="w-full"
            ></Input>
            <Input placeholder="California" className="w-full"></Input>
            <div className="flex gap-6">
              <Input placeholder="San Francisco" className="w-full"></Input>
              <Input placeholder="California" className="w-full"></Input>
            </div>
            <Input placeholder="United States" className="w-full"></Input>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <PrimaryButton type="submit">Add Manufacturer</PrimaryButton>
        <GrayButton type="button" onClick={() => setShowAddModal(false)}>
          Cancel
        </GrayButton>
      </ModalFooter>
    </ModalContainer>
  );
}

export default ManufacturerNew;
