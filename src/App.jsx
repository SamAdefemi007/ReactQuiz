import { useState, useEffect } from "react";
import "./App.css";
import IndexPage from "./components/IndexPage";
import top from "./images/top-image.png";
import bottom from "./images/bottom-image.png";
import QuestionLine from "./components/QuestionLine";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const [questionData, setQuestionData] = useState([]);

  const [userChoice, setUserChoice] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  // const [correctAnswers, setCorrectAnswers] = useState({});

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestionData(data.results));
  }, [isQuizStarted]);

  const correctAnswers = {};
  const questionElements = questionData.map((question, index) => {
    correctAnswers[index] = question.correct_answer;

    return (
      <QuestionLine
        userChoice={userChoice}
        handleChange={handleChange}
        id={index}
        question={question}
        key={index}
        isSubmitted={isSubmitted}
        isQuizStarted={isQuizStarted}
      />
    );
  });

  function StartEndQuiz() {
    setIsQuizStarted((prev) => !prev);
    if (isQuizStarted == false) {
      setIsSubmitted(false);
    }
  }

  function handleChange(e, id) {
    e.preventDefault();
    setUserChoice((prevChoices) => {
      return {
        ...prevChoices,
        [e.target.name]: e.target.value,
      };
    });
    if (userChoice[id] == correctAnswers[id]) {
      setScore((score) => score + 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ userChoice });
    console.log({ correctAnswers });
    let totalScore = 0;
    for (const [key, value] of Object.entries(correctAnswers)) {
      if (userChoice[key] == value) {
        totalScore += 1;
      }
    }
    setIsSubmitted(true);
    setScore(totalScore);
  }

  const totalQuestions = Object.keys(correctAnswers).length;

  return (
    <div>
      {isQuizStarted ? (
        <div className="questionPage">
          <h1 className="questionHead">Questions</h1>
          {questionElements}
          {isSubmitted ? (
            <div>
              <h3>
                You scored {score}/ {totalQuestions} correct answers
              </h3>
              <button onClick={StartEndQuiz}>Play Again</button>
            </div>
          ) : (
            <button onClick={handleSubmit} className="checkAnswer">
              Check Answers
            </button>
          )}
        </div>
      ) : (
        <IndexPage quizStart={StartEndQuiz} />
      )}
    </div>
  );
}

export default App;
