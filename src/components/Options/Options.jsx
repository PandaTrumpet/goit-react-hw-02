export default function Options({
  value: { good, neutral, bad },
  onUpGood,
  onUpNeutral,
  onUpBad,
}) {
  return (
    <>
      <button onClick={onUpGood}>Good</button>
      <button onClick={onUpNeutral}>Neutral</button>
      <button onClick={onUpBad}>Bad</button>
    </>
  );
}
