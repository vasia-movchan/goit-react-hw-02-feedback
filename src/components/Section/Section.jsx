import { Component } from 'react';
import styled from 'styled-components';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Wrapper>
        <Title> {title} </Title>
        {children}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

export default Section;
