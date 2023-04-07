import { AdminLayout } from "@/components/Layouts";
import { DashboardComponents } from "@/sections/Admin/Dashboard";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <DashboardComponents />
    </AdminLayout>
  );
}
