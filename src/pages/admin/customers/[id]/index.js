import { AdminLayout } from "@/components/Layouts";
import { CustomerDetail } from "@/sections/Admin/Customers";

export default function index() {
  return (
    <AdminLayout>
      <CustomerDetail />
    </AdminLayout>
  );
}
