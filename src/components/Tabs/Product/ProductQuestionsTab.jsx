import { Textarea, Button } from "@/components/Form";
import React from "react";

function ProductQuestionsTab() {
    const questions = [
        {
            question: "What is the difference between the 3 models?",
            answer: "The 3 models are the same, but the 2nd and 3rd models have a different color.",
        },
        {
            question: "Which model is the best?",
            answer: "The 3rd model is the best.",
        },
        {
            question: "What is the difference between the 3 models?",
            answer: "The 3 models are the same, but the 2nd and 3rd models have a different color.",
        },
        {
            question: "Which model is the best?",
            answer: "The 3rd model is the best.",
        },
    ];

    return (
        <div>
            <p className="font-bold pb-3">Questions</p>
            {questions.map((question, index) => (
                <div key={index} className="mb-4 text-sm">
                    <p className="font-bold pb-2">{question.question}</p>
                    <p>{question.answer}</p>
                </div>
            ))}
            <div className="">
                <Textarea classname="w-full h-24 mb-4">Your question</Textarea>
                <Button>Send</Button>
            </div>
        </div>
    );
}

export default ProductQuestionsTab;
