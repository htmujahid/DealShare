import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { DashboardComponents } from "@/sections/Admin/Dashboard";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <DashboardComponents />
    </AdminLayout>
  );
}

index.routeProtector = [userRoles.ADMIN];
