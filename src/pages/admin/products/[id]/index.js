import { AdminLayout } from "@/components/Layouts";
import { ProductDetail } from "@/sections/Admin/Products";
import React from "react";

export default function product() {
  return (
    <AdminLayout>
      <ProductDetail />
    </AdminLayout>
  );
}
