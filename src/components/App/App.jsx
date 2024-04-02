import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
export default function App() {
  const [object, setObject] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const goodClick = (event) => {
    setObject({
      ...object,
      good: object.good + 1,
    });
  };

  const neutralClick = (event) => {
    setObject({
      ...object,
      neutral: object.neutral + 1,
    });
  };

  const badClick = (event) => {
    setObject({
      ...object,
      bad: object.bad + 1,
    });
  };

  return (
    <>
      <Description />
      <Options
        value={object}
        onUpGood={goodClick}
        onUpNeutral={neutralClick}
        onUpBad={badClick}
      />
      <Feedback value={object} />
    </>
  );
}
