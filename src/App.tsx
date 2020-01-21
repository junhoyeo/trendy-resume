import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProductSection from './components/templates/ProductSection';
import ProductCard from './components/organisms/ProductCard';

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
