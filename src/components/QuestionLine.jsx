import { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";

export default function QuestionLine({
  question,
  id,
  userChoice,
  handleChange,
  isSubmitted,
}) {
  return (
    <div className="questionPage">
      <div className="questionLine">
        <Question key={id} question={question} />
        <div>
          <Answer
            userChoice={userChoice}
            handleChange={handleChange}
            question={question}
            id={id}
            answers={[...question.incorrect_answers, question.correct_answer]}
            isSubmitted={isSubmitted}
            correct_answer={question.correct_answer}
          />
        </div>
      </div>
    </div>
  );
}
