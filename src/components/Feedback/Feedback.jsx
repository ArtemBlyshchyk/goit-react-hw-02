import css from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positivePercOfFeedback }) => {
  if (totalFeedback !== 0) {
    return (
      <ul className={css.listContainer}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positivePercOfFeedback || 0}%</li>
      </ul>
    );
  }
};

export default Feedback;
