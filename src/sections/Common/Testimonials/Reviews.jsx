import { ReviewCard } from "@/components/Card";
import { CustomerContainer } from "@/components/Layouts/Container";
import React, { useRef } from "react";

function Reviews() {
    const ref = useRef(null);
    function handlePrev() {
        ref.current.scrollLeft -= 300;
    }

    function handleNext() {
        ref.current.scrollLeft += 300;
    }
    return (
        <>
            <CustomerContainer>
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold pb-8">
                        Our Customer Says
                    </h1>
                    <div className="flex gap-4">
                        <button
                            className="bg-primary rounded-full h-10 w-10 flex items-center justify-center"
                            onClick={handlePrev}
                        >
                            <span className="material-symbols-outlined">
                                navigate_before
                            </span>
                        </button>
                        <button
                            className="bg-primary rounded-full h-10 w-10 flex items-center justify-center"
                            onClick={handleNext}
                        >
                            <span className="material-symbols-outlined">
                                navigate_next
                            </span>
                        </button>
                    </div>
                </div>
            </CustomerContainer>
            <div
                ref={ref}
                className="flex justify-start gap-8 pb-16 overflow-x-auto scrollbar-hide scroll-smooth"
            >
                {Array(10)
                    .fill(0)
                    .map((_, i) => (
                        <ReviewCard key={i} />
                    ))}
            </div>
        </>
    );
}

export default Reviews;
