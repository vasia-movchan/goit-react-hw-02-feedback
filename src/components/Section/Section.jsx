import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title> {title} </Title>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 420px;
  min-width: 320px;
  margin: 12px auto;
  background-color: aliceblue;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.73); ;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
