import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { SettingComponents } from "@/sections/Admin/Setting";
import React from "react";

function index() {
  return (
    <AdminLayout>
      <SettingComponents />
    </AdminLayout>
  );
}

index.routeProtector = [userRoles.ADMIN];

export default index;
