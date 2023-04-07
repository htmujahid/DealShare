import { AdminLayout } from "@/components/Layouts";
import { OrdersSummary, OrdersTable } from "@/sections/Admin/Orders";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <OrdersSummary />
      <OrdersTable />
    </AdminLayout>
  );
}
