import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { DashboardComponents } from "@/sections/Manufacturer/Dashboard";
import React from "react";

export default function index() {
  return (
    <ManufacturerLayout>
      <DashboardComponents />
    </ManufacturerLayout>
  );
}

index.routeProtector = [userRoles.MANUFACTURER];
