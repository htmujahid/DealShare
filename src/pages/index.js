import { CustomerLayout } from "@/components/Layouts";
import { CategoryTags } from "@/sections/Common";
import { Reviews } from "@/sections/Common/Testimonials";
import { ProductCategory, ProductsGrid } from "@/sections/Home";

export default function Home() {
    return (
        <CustomerLayout>
            <ProductsGrid />
            <Reviews />
            <ProductCategory />
            <CategoryTags />
        </CustomerLayout>
    );
}
