import * as React from 'react';
import styled from 'styled-components';

import ProductSection from '../components/templates/ProductSection';
import ProductCard from '../components/organisms/ProductCard';

export const Home: React.FC = () => (
  <Content>
    <ProductSection
      title="최근 활동"
    >
      <ProductCard
        title="WADONG"
        image="https://picsum.photos/seed/picsum/536/354"
      />
    </ProductSection>
  </Content>
);

export default Home;

const Content = styled.main`
`;
