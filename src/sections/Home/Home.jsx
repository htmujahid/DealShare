import { CustomerLayout } from "@/components/Layouts";
import BlockLoader from "@/components/Loaders/BlockLoader";
import { useProducts } from "@/lib/app/product";
import { CategoryTags } from "@/sections/Common";
import { Reviews } from "@/sections/Common/Testimonials";
import { ProductCategory, ProductsGrid } from "@/sections/Home";

export default function Home() {
  const { products, loading } = useProducts(60);

  return (
    <CustomerLayout>
      {loading ? (
        <BlockLoader />
      ) : (
        <>
          <ProductsGrid products={products} />
          <Reviews />
          <ProductCategory products={products} />
          <CategoryTags />
        </>
      )}
    </CustomerLayout>
  );
}
