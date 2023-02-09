import { Textarea, Button } from "@/components/Form";
import React from "react";

function ProductQuestionsTab({ questions }) {
  return (
    <div>
      <p className="font-bold text-2xl pb-3">Questions</p>
      {questions?.length > 0 ? (
        <>
          {questions.map((question, index) => (
            <div key={index} className="mb-4 text-sm">
              <p className="font-bold pb-2">{question.question}</p>
              <p>{question.answer}</p>
            </div>
          ))}
        </>
      ) : (
        <div className="mb-4">
          No questions. Ask your question to get listed here.
        </div>
      )}
      <div className="">
        <Textarea classname="w-full h-24 mb-4">Your question</Textarea>
        <Button>Send</Button>
      </div>
    </div>
  );
}

export default ProductQuestionsTab;
