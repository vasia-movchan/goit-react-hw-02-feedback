import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions = ({ options, onCountFeedback }) => {
  return options.map(option => (
    <Button key={option} type="button" onClick={() => onCountFeedback(option)}>
      {option}
    </Button>
  ));
};

const Button = styled.button`
  font-size: 18px;
  background-color: #7ea6c9;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  width: 70px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #9757d3;
  }
`;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
