import css from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, handleResetFeedback }) => {
  return (
    <div className={css.btnContainer}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback !== 0 && (
        <button onClick={handleResetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;
