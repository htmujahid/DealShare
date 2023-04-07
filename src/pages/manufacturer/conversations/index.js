import { ManufacturerLayout } from "@/components/Layouts";
import { Conversations } from "@/sections/Manufacturer/Conversations";
import React from "react";

export default function index() {
  return (
    <ManufacturerLayout>
      <Conversations />
    </ManufacturerLayout>
  );
}
