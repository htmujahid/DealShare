import { Button, Input, Textarea } from "@/components/Form";
import { ProductReview } from "@/components/Patterns";
import React, { useState } from "react";

function ProductReviewsTab() {
    const [rating, setRating] = useState(1);
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            rating: 4,
            review: "Lorem ipsum dolor sit amet. Qui necessitatibus aperiam ut consequuntur autem qui dolor consequatur qui laudantium iusto. Sit assumenda culpa sed asperiores vitae sit quam voluptatibus 33 totam nihil. At rerum assumenda ut deserunt voluptatum aut fugit voluptatem et libero dolore nam nisi itaque et voluptatem commodi.",
            date: "2021-01-01",
        },
        {
            id: 2,
            name: "Jane Doe",
            rating: 5,
            review: "Lorem ipsum dolor sit amet. Qui necessitatibus aperiam ut consequuntur autem qui dolor consequatur qui laudantium iusto. Sit assumenda culpa sed asperiores vitae sit quam voluptatibus 33 totam nihil. At rerum assumenda ut deserunt voluptatum aut fugit voluptatem et libero dolore nam nisi itaque et voluptatem commodi.",
            date: "2021-01-01",
        },
        {
            id: 3,
            name: "John Doe",
            rating: 4,
            review: "Lorem ipsum dolor sit amet. Qui necessitatibus aperiam ut consequuntur autem qui dolor consequatur qui laudantium iusto. Sit assumenda culpa sed asperiores vitae sit quam voluptatibus 33 totam nihil. At rerum assumenda ut deserunt voluptatum aut fugit voluptatem et libero dolore nam nisi itaque et voluptatem commodi.",
            date: "2021-01-01",
        },
        {
            id: 4,
            name: "Jane Doe",
            rating: 5,
            review: "Lorem ipsum dolor sit amet. Qui necessitatibus aperiam ut consequuntur autem qui dolor consequatur qui laudantium iusto. Sit assumenda culpa sed asperiores vitae sit quam voluptatibus 33 totam nihil. At rerum assumenda ut deserunt voluptatum aut fugit voluptatem et libero dolore nam nisi itaque et voluptatem commodi.",
            date: "2021-01-01",
        },
        {
            id: 5,
            name: "John Doe",
            rating: 4,
            review: "Lorem ipsum dolor sit amet. Qui necessitatibus aperiam ut consequuntur autem qui dolor consequatur qui laudantium iusto. Sit assumenda culpa sed asperiores vitae sit quam voluptatibus 33 totam nihil. At rerum assumenda ut deserunt voluptatum aut fugit voluptatem et libero dolore nam nisi itaque et voluptatem commodi.",
            date: "2021-01-01",
        },
        {
            id: 6,
            name: "Jane Doe",
            rating: 5,
            review: "Lorem ipsum dolor sit amet. Qui necessitatibus aperiam ut consequuntur autem qui dolor consequatur qui laudantium iusto. Sit assumenda culpa sed asperiores vitae sit quam voluptatibus 33 totam nihil. At rerum assumenda ut deserunt voluptatum aut fugit voluptatem et libero dolore nam nisi itaque et voluptatem commodi.",
            date: "2021-01-01",
        },
    ];
    return (
        <div>
            <p className="font-bold pb-3">Reviews</p>
            <div className="flex flex-col space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <p className="font-bold">{review.name}</p>
                            <ProductReview rating={review.rating} />
                        </div>
                        <p>{review.review}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                ))}
                <div>
                    <Textarea classname="w-full h-32 mb-4">
                        Your Review
                    </Textarea>
                    <div className="flex items-center justify-between gap-x-4">
                        <Input
                            type="number"
                            min="1"
                            max="5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />

                        <Button>Submit Review</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReviewsTab;
