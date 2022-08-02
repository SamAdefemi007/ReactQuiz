import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import IndexPage from "./components/IndexPage";
import top from "./images/top-image.png";
import bottom from "./images/bottom-image.png";
import QuestionLine from "./components/QuestionLine";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const [questionData, setQuestionData] = useState([]);

  const [userChoice, setUserChoice] = useState({});

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestionData(data.results));
  }, []);

  console.log({ userChoice });
  const questionElements = questionData.map((question, index) => {
    return (
      <QuestionLine
        isSelected={isSelected}
        userChoice={userChoice}
        handleChange={handleChange}
        id={index}
        question={question}
        key={index}
      />
    );
  });

  function StartEndQuiz() {
    setIsQuizStarted((prev) => !prev);
  }

  function handleChange(e, idx) {
    console.log(e);
    e.preventDefault();
    setUserChoice((prevChoices) => {
      return {
        ...prevChoices,
        [e.target.name]: e.target.value,
      };
    });
    if (Object.values(userChoice).includes(e.target.value)) {
      setIsSelected(true);
    }
    console.log({ select: isSelected });
  }

  return (
    <div>
      {isQuizStarted ? (
        <div>
          {questionElements}{" "}
          <button className="checkAnswer">Check Answers</button>
        </div>
      ) : (
        <IndexPage quizStart={StartEndQuiz} />
      )}
      <img className="bottomImage" src={bottom} />
      <img className="topImage" src={top} />
    </div>
  );
}

export default App;
