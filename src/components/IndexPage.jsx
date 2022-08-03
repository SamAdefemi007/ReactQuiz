function IndexPage(props) {
  return (
    <div className="App">
      <div>
        <h1 className="logo">Quizzical</h1>
        <p className="indexText">The choice quiz application</p>
        <button onClick={props.quizStart} className="startButton">
          Start quiz
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
