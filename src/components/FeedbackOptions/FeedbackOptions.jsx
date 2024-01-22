const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(option => (
    <button key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));

  return <div>{buttons}</div>;
};

export default FeedbackOptions;
