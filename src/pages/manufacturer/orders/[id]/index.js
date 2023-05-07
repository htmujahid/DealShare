import { ManufacturerLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { OrderDetail } from "@/sections/Manufacturer/Orders";

export default function index() {
  return (
    <ManufacturerLayout>
      <OrderDetail />
    </ManufacturerLayout>
  );
}

index.routeProtector = [userRoles.MANUFACTURER];
