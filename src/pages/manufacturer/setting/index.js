import { DashboardLayout } from "@/components/Layouts";
import { SettingComponents } from "@/sections/Admin";
import React from "react";

function index() {
  return (
    <DashboardLayout>
      <SettingComponents />
    </DashboardLayout>
  );
}

export default index;
