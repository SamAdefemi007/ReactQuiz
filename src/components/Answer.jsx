export default function Answer({ answers, id, handleChange, isSelected }) {
  const styles = isSelected ? "selectedButton" : "answerButton";

  return (
    <>
      {answers.map((answer, index) => (
        <button
          value={answer}
          name={id}
          key={index}
          onClick={(e) => handleChange(e, id)}
          className={styles}
        >
          {answer}
        </button>
      ))}
    </>
  );
}

// 0: [false, false, false, false]
// 1:
