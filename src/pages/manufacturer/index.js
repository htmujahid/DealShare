import { DashboardLayout } from "@/components/Layouts";
import { DashboardComponents } from "@/sections/Admin";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <DashboardComponents />
    </DashboardLayout>
  );
}
