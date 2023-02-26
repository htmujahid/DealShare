import { DashboardLayout } from "@/components/Layouts";
import { CustomerDetail } from "@/sections/Admin/Customers";

export default function index() {
  return (
    <DashboardLayout>
      <CustomerDetail />
    </DashboardLayout>
  );
}
