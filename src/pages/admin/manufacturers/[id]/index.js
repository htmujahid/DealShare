import { AdminLayout } from "@/components/Layouts";
import { ManufacturerDetail } from "@/sections/Admin/Manufacturers";

export default function index() {
  return (
    <AdminLayout>
      <ManufacturerDetail />
    </AdminLayout>
  );
}
