import { CustomerLayout } from "@/components/Layouts";
import { useProducts } from "@/lib/app/product";
import { CategoryTags } from "@/sections/Common";
import { Reviews } from "@/sections/Common/Testimonials";
import { ProductCategory, ProductsGrid } from "@/sections/Home";

export default function Home() {
  const { products } = useProducts(60);

  return (
    <CustomerLayout>
      <ProductsGrid products={products} />
      <Reviews />
      <ProductCategory />
      <CategoryTags />
    </CustomerLayout>
  );
}
