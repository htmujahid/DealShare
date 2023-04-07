import { ManufacturerLayout } from "@/components/Layouts";
import { DashboardComponents } from "@/sections/Manufacturer/Dashboard";
import React from "react";

export default function index() {
  return (
    <ManufacturerLayout>
      <DashboardComponents />
    </ManufacturerLayout>
  );
}
