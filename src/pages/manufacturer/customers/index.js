import { DashboardLayout } from "@/components/Layouts";
import {
  CustomersSummary,
  CustomersTable,
} from "@/sections/Manufacturer/Customers";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <CustomersSummary />
      <CustomersTable />
    </DashboardLayout>
  );
}
