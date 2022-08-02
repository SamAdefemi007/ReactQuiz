import Question from "./Question";
import Answer from "./Answer";

export default function QuestionLine({
  question,
  id,
  isSelected,
  userChoice,
  handleChange,
}) {
  return (
    <div className="questionPage">
      <div>
        <Question key={id} question={question} />
        <Answer
          isSelected={isSelected}
          userChoice={userChoice}
          handleChange={handleChange}
          id={id}
          answers={[...question.incorrect_answers, question.correct_answer]}
        />
      </div>
    </div>
  );
}
