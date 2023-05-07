import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { ProductNew } from "@/sections/Manufacturer/Products";

export default function create() {
  return (
    <ManufacturerLayout>
      <ProductNew />
    </ManufacturerLayout>
  );
}

create.routeProtector = [userRoles.MANUFACTURER];
