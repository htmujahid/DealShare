import { AdminLayout } from "@/components/Layouts";
import { ProductUpdate } from "@/sections/Admin/Products";

export default function edit() {
  return (
    <AdminLayout>
      <ProductUpdate />
    </AdminLayout>
  );
}
