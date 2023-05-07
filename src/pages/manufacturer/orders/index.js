import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { OrdersSummary, OrdersTable } from "@/sections/Manufacturer/Orders";
import React from "react";

export default function index() {
  return (
    <ManufacturerLayout>
      <OrdersSummary />
      <OrdersTable />
    </ManufacturerLayout>
  );
}

index.routeProtector = [userRoles.MANUFACTURER];
