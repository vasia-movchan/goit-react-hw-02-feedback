import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title> {title} </Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
