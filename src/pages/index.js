import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { fonts } from './styles';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledLogo = styled.img`
  height: 80px;
`;

const StyledHeader = styled.header`
  height: 150px;
  padding: 20px;
`;

const StyledTitle = styled.h1`
  font-size: ${fonts.size.h3};
`;

const StyledParagraph = styled.p`
  font-size: ${fonts.size.large};
  margin: 20px auto;
`;

const App = () => (
  <StyledApp>
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <StyledTitle>Welcome to React</StyledTitle>
    </StyledHeader>
    <StyledParagraph>
      To get started, edit <code>src/App.js</code> and save to reload.
    </StyledParagraph>
  </StyledApp>
);

export default App;
