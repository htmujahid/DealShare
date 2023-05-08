import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import {
  ManufacturersSummary,
  ManufacturersTable,
} from "@/sections/Admin/Manufacturers";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <ManufacturersSummary />
      <ManufacturersTable />
    </AdminLayout>
  );
}
index.routeProtector = [userRoles.ADMIN];
