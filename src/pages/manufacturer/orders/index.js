import { DashboardLayout } from "@/components/Layouts";
import { OrdersSummary, OrdersTable } from "@/sections/Manufacturer/Orders";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <OrdersSummary />
      <OrdersTable />
    </DashboardLayout>
  );
}
