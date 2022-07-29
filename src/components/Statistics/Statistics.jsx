import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import styled from 'styled-components';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Title>Statistics</Title>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatList>
          <StatItem>Good: {good}</StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
          <StatItem>Total: {total}</StatItem>
          <StatItem>Positive feedback: {positivePercentage}%</StatItem>
        </StatList>
      )}
    </>
  );
};

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StatItem = styled.li`
  font-size: 18px;
`;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
