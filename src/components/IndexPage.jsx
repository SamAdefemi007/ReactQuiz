import { useState } from "react";
import reactLogo from "../assets/react.svg";

function IndexPage(props) {
  return (
    <div className="App">
      <div className="defaultPage">
        <h1>Quizzical</h1>
        <p>The choice quiz application</p>
        <button onClick={props.quizStart} className="startButton">
          Start quiz
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
