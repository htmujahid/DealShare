import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { CustomerDetail } from "@/sections/Admin/Customers";

export default function index() {
  return (
    <AdminLayout>
      <CustomerDetail />
    </AdminLayout>
  );
}
index.routeProtector = [userRoles.ADMIN];
