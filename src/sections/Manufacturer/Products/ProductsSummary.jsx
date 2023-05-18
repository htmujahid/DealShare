import { ProductIcon, StarIcon, TrendingDownIcon } from "@/components/Assets";
import { PrimaryButton } from "@/components/Buttons";
import { StatsSummary } from "@/components/Widgets";
import { useProductsByManufacturer } from "@/lib/app/product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ProductsSummary() {
  const router = useRouter();
  const { products, isLoading, isError } = useProductsByManufacturer();
  const [allProducts, setAllProducts] = useState(0);
  const [activeProducts, setActiveProducts] = useState(0);
  const [lowStockProducts, setLowStockProducts] = useState(0);
  const [outOfStockProducts, setOutOfStockProducts] = useState(0);

  useEffect(() => {
    if (products) {
      setAllProducts(products.length);
      setActiveProducts(
        products.filter((product) => product.status === "Published").length
      );
      setLowStockProducts(
        products.filter((product) => product.inventory.quantity <= 10).length
      );
      setOutOfStockProducts(
        products.filter((product) => product.inventory.quantity == 0).length
      );
    }
  }, [products]);

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            Products Summary
          </h1>

          <PrimaryButton
            onClick={() => {
              router.push("/manufacturer/products/create");
            }}
          >
            Add New Product
          </PrimaryButton>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <StatsSummary
            icon={<ProductIcon />}
            type="single"
            value={[
              { title: "All Products", value: allProducts },
              { title: "Active Products", value: activeProducts },
            ]}
          />
          <StatsSummary
            icon={<TrendingDownIcon />}
            value={[
              { title: "Low Stock Alert", value: lowStockProducts },
              { title: "Out of Stock", value: outOfStockProducts },
            ]}
          />
          <StatsSummary
            icon={<StarIcon />}
            value={[
              {
                title: "Published Products",
                value: products?.filter(
                  (product) => product.status == "Published"
                ).length,
              },
              {
                title: "Draft Products",

                value: products?.filter(
                  (product) => product.status != "Published"
                ).length,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default ProductsSummary;
