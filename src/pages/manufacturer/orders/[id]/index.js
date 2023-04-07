import { ManufacturerLayout } from "@/components/Layouts";
import { OrderDetail } from "@/sections/Manufacturer/Orders";

export default function index() {
  return (
    <ManufacturerLayout>
      <OrderDetail />
    </ManufacturerLayout>
  );
}
