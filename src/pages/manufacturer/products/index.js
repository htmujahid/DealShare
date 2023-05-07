import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import {
  ProductsSummary,
  ProductsTable,
} from "@/sections/Manufacturer/Products";
import React from "react";

export default function index() {
  return (
    <ManufacturerLayout>
      <ProductsSummary />
      <ProductsTable />
    </ManufacturerLayout>
  );
}

index.routeProtector = [userRoles.MANUFACTURER];
