import { AdminLayout } from "@/components/Layouts";
import { userRoles } from "@/lib/app/user";
import { ProductNew } from "@/sections/Admin/Products";

export default function create() {
  return (
    <AdminLayout>
      <ProductNew />
    </AdminLayout>
  );
}

create.routeProtector = [userRoles.ADMIN];
