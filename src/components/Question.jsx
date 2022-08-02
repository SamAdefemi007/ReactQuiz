export default function Question(props) {
  return (
    <h1 className="question" key={props.id}>
      {props.question.question}
    </h1>
  );
}
