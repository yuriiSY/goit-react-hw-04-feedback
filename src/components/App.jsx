import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  addVote = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
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
              onLeaveFeedback={this.addVote}
            />
          }
        </Section>
      </>
    );
  }
}
