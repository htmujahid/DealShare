import { Button } from "@/components/Form";
import { ProductReview } from "@/components/Patterns";
import Link from "next/link";
import React from "react";

function ProductDetailedCard() {
    return (
        <div className="border border-primary-light rounded-xl overflow-hidden w-[869px] h-[280] flex gap-8">
            <div className="h-[280px] w-[280px] bg-neutral">
                <img src="" alt="" />
            </div>
            <div className="py-8 flex-1">
                <h3 className="font-bold text-lg pb-1">Product Name</h3>
                <p className="text-sm pb-2">Product Description</p>
                <ProductReview rating={4} />
                <div className="pt-3 text-gray-500 text-sm">
                    <div className="flex pt-3">
                        <div className="w-24">Type</div>
                        <div className="w-24">Electronics</div>
                    </div>
                    <div className="flex pt-3">
                        <div className="w-24">Delivery</div>
                        <div className="w-24">Europe</div>
                    </div>
                    <div className="flex pt-3">
                        <div className="w-24">Stock</div>
                        <div className="w-24">320 pcs</div>
                    </div>
                </div>
            </div>
            <div className="py-8 pr-8 flex flex-col justify-between">
                <div>
                    <p className="text-primary-dark text-lg font-bold">
                        36.99 USD
                    </p>
                    <p className="font-semibold text-sm text-gray-400 line-through">
                        48.56
                    </p>
                </div>
                <div className="text-sm text-gray-500">
                    <p className="font-bold">Shipping Fees</p>
                    <p>Delivery in 12 day</p>
                </div>
                <div className="flex flex-col gap-3">
                    <Link href="/product/1">
                        <Button type="primary">
                            Product Detail
                            <span className="material-symbols-outlined">
                                arrow_right
                            </span>
                        </Button>
                    </Link>
                    <Button>
                        <span className="material-symbols-outlined pr-2">
                            favorite
                        </span>
                        Add to Card
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailedCard;
