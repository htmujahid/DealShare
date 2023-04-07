import { AdminLayout } from "@/components/Layouts";
import { CustomersSummary, CustomersTable } from "@/sections/Admin/Customers";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <CustomersSummary />
      <CustomersTable />
    </AdminLayout>
  );
}
