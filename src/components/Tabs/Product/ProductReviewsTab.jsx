import { Button, Input, Textarea } from "@/components/Form";
import { ProductReview } from "@/components/Patterns";
import { getFullName } from "@/lib/app/user";
import React, { useState } from "react";
import { format } from "date-fns";

function ProductReviewsTab({ feedbacks }) {
  const [rating, setRating] = useState(1);

  return (
    <div>
      <p className="font-bold pb-3 text-2xl">Reviews</p>
      <div className="flex flex-col space-y-4">
        {feedbacks && feedbacks.length > 0 ? (
          <>
            {feedbacks.map((review) => (
              <div key={review._id} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <p className="font-bold">
                    {getFullName(review.user.firstName, review.user.lastName)}
                  </p>
                  <ProductReview rating={review.stars} />
                </div>
                <p>{review.description}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(review.createdAt), "PPpp")}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col space-y-4">
            Be the first to review this product.
          </div>
        )}
        <div>
          <Textarea classname="w-full h-32 mb-4">Your Review</Textarea>
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex items-center">
              Stars:
              <Input
                divClassName="ml-4"
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <Button>Submit Review</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviewsTab;
