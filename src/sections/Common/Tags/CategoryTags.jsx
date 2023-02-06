import { CustomerContainer } from "@/components/Layouts/Container";
import Link from "next/link";

function CategoryTags() {
    const categories = [
        { id: "electronics", name: "Electronics" },
        { id: "jewelery", name: "Jewelery" },
        { id: "devices", name: "Devices" },
        { id: "furniture", name: "Furniture" },
        { id: "clothing", name: "Clothing" },
        { id: "books", name: "Books" },
        { id: "toys", name: "Toys" },
        { id: "sports", name: "Sports" },
        { id: "outdoors", name: "Outdoors" },
        { id: "grocery", name: "Grocery" },
        { id: "health", name: "Health" },
        { id: "beauty", name: "Beauty" },
        { id: "home", name: "Home" },
        { id: "garden", name: "Garden" },
        { id: "tools", name: "Tools" },
    ];

    const categoryTagsElement = categories.map((cat) => (
        <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="bg-primary rounded-full py-2 px-4"
        >
            {cat.name}
        </Link>
    ));

    return (
        <CustomerContainer>
            <h2 className="text-2xl font-bold pb-8">Category Tags</h2>
            <div className="flex gap-4 justify-start flex-wrap pb-16 font-bold text-sm">
                {categoryTagsElement}
            </div>
        </CustomerContainer>
    );
}

export default CategoryTags;
