import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { ProductsSummary, ProductsTable } from "@/sections/Admin/Products";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <ProductsSummary />
      <ProductsTable />
    </AdminLayout>
  );
}

index.routeProtector = [userRoles.ADMIN];
