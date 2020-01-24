import * as React from 'react';
import styled from 'styled-components';

import ProductSection from '../components/templates/ProductSection';

import '../styles/global.scss';

export const Home: React.FC = () => (
  <Content>
    <ProductSection
      title="최근 활동"
      products={[]}
    >
    </ProductSection>
  </Content>
);

export default Home;

const Content = styled.main`
`;
