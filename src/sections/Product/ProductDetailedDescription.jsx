import { ProductDescriptionCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import {
    ProductDescriptionTab,
    ProductQuestionsTab,
    ProductReviewsTab,
} from "@/components/Tabs";
import React, { useState } from "react";

function ProductDetailedDescription() {
    const [currentTab, setCurrentTab] = useState("description");
    return (
        <CustomerContainer>
            <div className="grid grid-cols-2 gap-8 my-4">
                <div className="w-[569px] h-[436px] bg-gray-100 rounded-xl sticky top-8"></div>
                <div className="w-[569px]">
                    <ProductDescriptionCard />
                    <div>
                        <div className="grid grid-cols-3 text-xl font-bold mb-12">
                            <button
                                className={`text-left pb-2 border-b ${
                                    currentTab === "description" &&
                                    "border-b-2 border-primary-dark"
                                }`}
                                onClick={() => setCurrentTab("description")}
                            >
                                Description
                            </button>
                            <button
                                className={`text-left pb-2 border-b ${
                                    currentTab === "reviews" &&
                                    "border-b-2 border-primary-dark"
                                }`}
                                onClick={() => setCurrentTab("reviews")}
                            >
                                Reviews
                            </button>
                            <button
                                className={`text-left pb-2 border-b ${
                                    currentTab === "questions" &&
                                    "border-b-2 border-primary-dark"
                                }`}
                                onClick={() => setCurrentTab("questions")}
                            >
                                Questions
                            </button>
                        </div>
                        <div>
                            {currentTab === "description" && (
                                <ProductDescriptionTab />
                            )}
                            {currentTab === "reviews" && <ProductReviewsTab />}
                            {currentTab === "questions" && (
                                <ProductQuestionsTab />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </CustomerContainer>
    );
}

export default ProductDetailedDescription;
