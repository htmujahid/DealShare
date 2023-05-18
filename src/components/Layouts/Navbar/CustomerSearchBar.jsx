import { CartContext, SearchContext } from "@/components/ContextProviders";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { CustomerContainer } from "../Container";
import { useProductCategories } from "@/lib/app/product";

function CustomerSearchBar() {
  const { categories } = useProductCategories();
  const { searchKeyword, setSearchKeyword } = useContext(SearchContext);
  const { cartItems } = useContext(CartContext);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace(`/search?searchTerm=${searchKeyword}`);
  };

  return (
    <CustomerContainer>
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-6 opacity-0">
          <div>
            {/* account icons */}
            <span className="material-symbols-outlined">person</span>
          </div>
          <div>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-6 px-6 py-3 border border-2 rounded-2xl"
        >
          <select
            onChange={(e) =>
              router.push(`/category/${e.target.value.toLowerCase()}`)
            }
            name=""
            id=""
            className="font-bold focus:outline-none"
          >
            <option value="">All Categories</option>
            {categories?.map((category) => (
              <option value={category.name} key={category._id}>
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </option>
            ))}
          </select>
          <span className="h-full border-l-2"></span>
          <input
            onChange={(e) => setSearchKeyword(e.target.value)}
            type="text"
            className="w-72 focus:outline-none"
            placeholder="Search Products, categories ..."
          />
          <button className="flex items-center" type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
        <div className="flex items-center gap-6">
          <Link href="/account">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link className="relative" href="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-4 rounded-full text-xs bg-primary flex items-center justify-center w-[20px] h-[20px]">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </CustomerContainer>
  );
}

export default CustomerSearchBar;
