import { DashboardLayout } from "@/components/Layouts";
import { Conversations } from "@/sections/Manufacturer/Conversations";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <Conversations />
    </DashboardLayout>
  );
}
