import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onCountFeedback }) => {
  return options.map(option => (
    <Button key={option} type="button" onClick={() => onCountFeedback(option)}>
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCountFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
