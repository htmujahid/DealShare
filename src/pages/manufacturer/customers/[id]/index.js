import { DashboardLayout } from "@/components/Layouts";
import { CustomerDetail } from "@/sections/Manufacturer/Customers";

export default function index() {
  return (
    <DashboardLayout>
      <CustomerDetail />
    </DashboardLayout>
  );
}
