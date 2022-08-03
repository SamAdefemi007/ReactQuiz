import { useState, useEffect } from "react";

export default function Answer({
  answers,
  id,
  handleChange,
  userChoice,
  isSubmitted,
  correct_answer,
  question,
}) {
  const [answerMap, setanswerMap] = useState([]);
  useEffect(() => {
    setanswerMap(shuffle(answers));
  }, [question]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  return (
    <>
      {answerMap.map((answer, index) => (
        <button
          value={answer}
          name={id}
          key={index}
          onClick={(e) => handleChange(e, id)}
          className={
            isSubmitted && answer === correct_answer
              ? "correctAnswers"
              : isSubmitted && userChoice[id] === answer
              ? "incorrectAnswer"
              : userChoice[id] === answer
              ? "selectedButton"
              : "answerButton"
          }
        >
          {answer}
        </button>
      ))}
    </>
  );
}

// 0: [false, false, false, false]
// 1:
