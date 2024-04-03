export default function Feedback({ value: { good, bad, neutral }, result }) {
  return (
    <>
      <div>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Positiv: {result}%</p>
      </div>
    </>
  );
}
