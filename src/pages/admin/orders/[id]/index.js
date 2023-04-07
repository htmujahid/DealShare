import { AdminLayout } from "@/components/Layouts";
import { OrderDetail } from "@/sections/Admin/Orders";

export default function index() {
  return (
    <AdminLayout>
      <OrderDetail />
    </AdminLayout>
  );
}
