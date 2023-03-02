import { DashboardLayout } from "@/components/Layouts";
import { Conversations } from "@/sections/Admin/Conversations";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <Conversations />
    </DashboardLayout>
  );
}
