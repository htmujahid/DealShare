import { DashboardLayout } from "@/components/Layouts";
import { DashboardComponents } from "@/sections/Manufacturer/Dashboard";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <DashboardComponents />
    </DashboardLayout>
  );
}
