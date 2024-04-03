import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [object, setObject] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-clicks");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setObject((object) => ({
      ...object,
      [feedbackType]: object[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setObject({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(object));
  }, [object]);
  const totalFeedback = object.good + object.neutral + object.bad;
  const totalResult = Math.round((object.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        onGood={() => {
          updateFeedback("good");
        }}
        onNeutral={() => {
          updateFeedback("neutral");
        }}
        onBad={() => {
          updateFeedback("bad");
        }}
        resetBtn={totalFeedback}
        onReset={handleReset}
      />

      {totalFeedback > 0 ? (
        <Feedback result={totalResult} value={object} />
      ) : (
        <Notification />
      )}
    </>
  );
}
