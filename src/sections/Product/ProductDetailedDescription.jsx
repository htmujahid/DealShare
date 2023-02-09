import { ProductDescriptionCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import {
  ProductDescriptionTab,
  ProductQuestionsTab,
  ProductReviewsTab,
} from "@/components/Tabs";
import { useProductFeedbacks, useProductQuestions } from "@/lib/app/product";
import React, { useState } from "react";

function ProductDetailedDescription({ product }) {
  const [currentTab, setCurrentTab] = useState("description");

  const { feedbacks } = useProductFeedbacks(product?._id);
  const { questions } = useProductQuestions(product?._id);

  return (
    <CustomerContainer>
      <div className="grid grid-cols-2 gap-8 my-4">
        <div className="w-[569px] h-[436px] bg-gray-100 rounded-xl sticky top-8">
          <img
            src={product?.media?.mediaURL[0] ?? ""}
            className="w-full rounded-xl"
            alt="abc"
          />
        </div>
        <div className="w-[569px]">
          <ProductDescriptionCard product={product} feedbacks={feedbacks} />
          <div>
            <div className="grid grid-cols-3 text-xl font-bold mb-12">
              <button
                className={`text-center pb-2 border-b ${
                  currentTab === "description" &&
                  "border-b-2 border-primary-dark"
                }`}
                onClick={() => setCurrentTab("description")}
              >
                Description
              </button>
              <button
                className={`text-center pb-2 border-b ${
                  currentTab === "reviews" && "border-b-2 border-primary-dark"
                }`}
                onClick={() => setCurrentTab("reviews")}
              >
                Reviews
              </button>
              <button
                className={`text-center pb-2 border-b ${
                  currentTab === "questions" && "border-b-2 border-primary-dark"
                }`}
                onClick={() => setCurrentTab("questions")}
              >
                Questions
              </button>
            </div>
            <div>
              {currentTab === "description" && <ProductDescriptionTab />}
              {currentTab === "reviews" && (
                <ProductReviewsTab feedbacks={feedbacks} />
              )}
              {currentTab === "questions" && (
                <ProductQuestionsTab questions={questions} />
              )}
            </div>
          </div>
        </div>
      </div>
    </CustomerContainer>
  );
}

export default ProductDetailedDescription;
