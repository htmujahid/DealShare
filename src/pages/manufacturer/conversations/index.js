import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { Conversations } from "@/sections/Manufacturer/Conversations";
import React from "react";

export default function index() {
  return (
    <ManufacturerLayout>
      <Conversations />
    </ManufacturerLayout>
  );
}

index.routeProtector = [userRoles.MANUFACTURER];
