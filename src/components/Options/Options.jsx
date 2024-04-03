export default function Options({
  onGood,
  onNeutral,
  onBad,
  resetBtn,
  onReset,
}) {
  return (
    <div>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
      {resetBtn > 0 ? (
        <button onClick={onReset} style={{ display: "inline" }}>
          Reset
        </button>
      ) : (
        <button style={{ display: "none" }}>Reset</button>
      )}
    </div>
  );
}
