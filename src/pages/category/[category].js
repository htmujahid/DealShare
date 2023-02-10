import React from "react";
import { CustomerLayout } from "@/components/Layouts";
import { CategoryViews } from "@/sections/Category";

function index() {
  return (
    <CustomerLayout>
      <CategoryViews />
    </CustomerLayout>
  );
}

export default index;
