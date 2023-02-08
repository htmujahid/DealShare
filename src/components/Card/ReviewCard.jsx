import React from "react";

function ReviewCard() {
    return (
        <div className="shrink-0 py-6 px-8 w-[369px] h-[198px] border rounded-xl">
            <p className="text-center font-bold text-sm">
                “ This is an super space for your customers qoute. Don’t worry
                it works smooth as pie. You will get all what you need by
                writiing a text here “
            </p>
            <p className="text-sm font-bold text-center text-primary-dark pt-6">
                - John Doe
            </p>
            <div className="w-12 h-12 bg-neutral rounded-full mx-auto overflow-hidden translate-y-1/2">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default ReviewCard;
