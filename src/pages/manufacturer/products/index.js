import { DashboardLayout } from "@/components/Layouts";
import {
  ProductsSummary,
  ProductsTable,
} from "@/sections/Manufacturer/Products";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <ProductsSummary />
      <ProductsTable />
    </DashboardLayout>
  );
}
