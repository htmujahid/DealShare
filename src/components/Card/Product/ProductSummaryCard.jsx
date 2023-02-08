import { ProductReview } from "@/components/Patterns";
import React from "react";

function ProductSummaryCard() {
    const [qty, setQty] = React.useState(1);
    return (
        <div className="flex gap-x-3">
            <div>
                <div className="w-[100px] h-[67px] bg-gray-100 rounded-xl mb-1"></div>
                <button className="flex text-sm text-gray-500 items-center">
                    <span className={`material-symbols-outlined mr-2`}>
                        cancel
                    </span>
                    Remove
                </button>
            </div>
            <div className="flex-1">
                <p className="font-bold">Product title</p>
                <div className="text-sm text-gray-500 grid grid-cols-2 gap-1">
                    <p className="w-20">Type</p>
                    <p className="w-20">Electronics</p>
                    <p className="w-20">Deliver</p>
                    <p className="w-20">12 Days</p>
                </div>
                <ProductReview rating={4} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex-1">
                    <h4 className="text-2xl text-primary-dark font-bold">
                        36.23 USD
                    </h4>
                    <p className="text-xs text-gray-500 line-through">
                        48.56 USD
                    </p>
                </div>
                <div className="bg-gray-100 rounded-xl px-4 py-3 text-sm">
                    <input
                        type="number"
                        min={1}
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        className="w-12 focus:outline-none bg-inherit"
                    />
                    <span className="border border-gray-300"></span>
                    <select
                        name="buyby"
                        id="buyby"
                        className="bg-inherit focus:outline-none"
                    >
                        <option value="Pcs">Pcs</option>
                        <option value="Box">Box</option>
                        <option value="Pack">Pack</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ProductSummaryCard;
