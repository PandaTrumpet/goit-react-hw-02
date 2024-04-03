export default function Feedback({ value: { good, bad, neutral }, result }) {
  return (
    <>
      <div>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Positiv: {Math.round((good / result) * 100)}%</p>
      </div>
    </>
  );
}
