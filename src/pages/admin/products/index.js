import { AdminLayout } from "@/components/Layouts";
import { ProductsSummary, ProductsTable } from "@/sections/Admin/Products";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <ProductsSummary />
      <ProductsTable />
    </AdminLayout>
  );
}
