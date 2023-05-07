import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { SettingComponents } from "@/sections/Manufacturer/Setting";
import React from "react";

function index() {
  return (
    <ManufacturerLayout>
      <SettingComponents />
    </ManufacturerLayout>
  );
}

index.routeProtector = [userRoles.MANUFACTURER];

export default index;
