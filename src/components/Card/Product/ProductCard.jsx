import { Button } from "@/components/Form";
import Link from "next/link";
import React from "react";

function ProductCard() {
    return (
        <Link href="/product/1">
            <div className="p-4 border border-primary-light rounded-xl w-[240px] h-[323]">
                <div className="rounded-xl h-[180px] w-[208px] bg-neutral">
                    <img src="" alt="" />
                </div>
                <div className="pt-4">
                    <h3 className="font-bold text-lg">Product Name</h3>
                    <p className="text-sm pb-2">Product Description</p>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-primary-dark text-lg font-bold">
                                $100
                            </p>
                            <p className="font-semibold text-gray-400 line-through">
                                $150
                            </p>
                        </div>
                        <Button
                            type="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
