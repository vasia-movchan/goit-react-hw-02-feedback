import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    const totalFeddback = total.reduce((acc, elem) => acc + elem, 0);
    return totalFeddback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;

    return Math.round((positiveFeedback / this.countTotalFeedback()) * 100);
  };

  render() {
    const optionsBtn = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionsBtn}
            onCountFeedback={this.countFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
