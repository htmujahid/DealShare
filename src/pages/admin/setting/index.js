import { AdminLayout } from "@/components/Layouts";
import { SettingComponents } from "@/sections/Admin/Setting";
import React from "react";

function index() {
  return (
    <AdminLayout>
      <SettingComponents />
    </AdminLayout>
  );
}

export default index;
