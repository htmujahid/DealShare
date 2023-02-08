import React from "react";

function ProductReview({ rating }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: rating }, (_, index) => {
                return (
                    <span key={index} className={`material-symbols-outlined `}>
                        star_outline
                    </span>
                );
            })}
        </div>
    );
}

export default ProductReview;
