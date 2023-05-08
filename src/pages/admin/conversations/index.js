import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { Conversations } from "@/sections/Admin/Conversations";
import React from "react";

export default function index() {
  return (
    <AdminLayout>
      <Conversations />
    </AdminLayout>
  );
}
index.routeProtector = [userRoles.ADMIN];
