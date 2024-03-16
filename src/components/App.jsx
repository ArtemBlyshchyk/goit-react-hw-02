import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useEffect, useState } from "react";

const initialFeedback = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const stringifyFeedback = localStorage.getItem("feedbackValues");
    const parceFeedback = JSON.parse(stringifyFeedback) ?? initialFeedback;
    return parceFeedback;
  });

  //Work with local storage
  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  // const totalFeedback = feedback.good + feedback.neutral + feedback.bad; - First variant
  //Second vriant
  const totalFeedback = Object.values(feedback).reduce(
    (acc, num) => acc + num,
    0
  );

  const positivePercOfFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetFeedback={handleResetFeedback}
      />

      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positivePercOfFeedback={positivePercOfFeedback}
      />

      <Notification totalFeedback={totalFeedback} />
    </>
  );
};

export default App;
