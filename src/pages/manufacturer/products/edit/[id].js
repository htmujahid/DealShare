import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { ProductUpdate } from "@/sections/Manufacturer/Products";

export default function edit() {
  return (
    <ManufacturerLayout>
      <ProductUpdate />
    </ManufacturerLayout>
  );
}

edit.routeProtector = [userRoles.MANUFACTURER];
