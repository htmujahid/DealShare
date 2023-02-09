import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import { CategoryViews } from "@/sections/Category";
import { Breadcrumb } from "@/sections/Common";
function index() {
  return (
    <CustomerLayout>
      <Breadcrumb />
      <CategoryViews />
    </CustomerLayout>
  );
}

export default index;
