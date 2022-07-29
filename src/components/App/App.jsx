import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

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

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={optionsBtn}
          onCountFeedback={this.countFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
