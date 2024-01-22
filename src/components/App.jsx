import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = votes;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = votes;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const addVote = name => {
    setVotes(prevVotes => {
      return {
        ...prevVotes,
        [name]: prevVotes[name] + 1,
      };
    });
  };

  const { good, neutral, bad } = votes;
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();

  return (
    <>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title={'Statistics'}>
          {
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          }
        </Section>
      )}
      <Section title={'Please leave feedback'}>
        {
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addVote}
          />
        }
      </Section>
    </>
  );
};

export default App;
