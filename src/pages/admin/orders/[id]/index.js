import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { OrderDetail } from "@/sections/Admin/Orders";

export default function index() {
  return (
    <AdminLayout>
      <OrderDetail />
    </AdminLayout>
  );
}
index.routeProtector = [userRoles.ADMIN];
