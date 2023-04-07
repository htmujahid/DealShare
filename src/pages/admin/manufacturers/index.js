import { AdminLayout } from "@/components/Layouts";
import {
  ManufacturersSummary,
  ManufacturersTable,
} from "@/sections/Admin/Manufacturers";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <ManufacturersSummary />
      <ManufacturersTable />
    </AdminLayout>
  );
}
