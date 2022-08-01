import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {positivePercentage}%</StatItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
