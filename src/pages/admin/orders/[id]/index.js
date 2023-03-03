import { DashboardLayout } from "@/components/Layouts";
import { OrderDetail } from "@/sections/Admin/Orders";

export default function index() {
  return (
    <DashboardLayout>
      <OrderDetail />
    </DashboardLayout>
  );
}
