import { DashboardLayout } from "@/components/Layouts";
import { OrderDetail } from "@/sections/Manufacturer/Orders";

export default function index() {
  return (
    <DashboardLayout>
      <OrderDetail />
    </DashboardLayout>
  );
}
