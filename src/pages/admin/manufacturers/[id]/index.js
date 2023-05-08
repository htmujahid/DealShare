import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { ManufacturerDetail } from "@/sections/Admin/Manufacturers";

export default function index() {
  return (
    <AdminLayout>
      <ManufacturerDetail />
    </AdminLayout>
  );
}
index.routeProtector = [userRoles.ADMIN];
