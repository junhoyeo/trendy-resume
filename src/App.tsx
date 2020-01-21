import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  html {
    font: 112.5%/1.45 'Noto Sans KR', sans-serif;
  }

  body {
    margin: 0;
  }
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
`;
