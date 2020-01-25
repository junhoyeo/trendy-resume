import * as React from 'react';
import styled from 'styled-components';

import ProductSection from '../components/templates/ProductSection';

import { IProduct } from '../utils/types';

import '../styles/global.scss';

const products: IProduct[] = Array(4).fill({
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fit=crop&w=1950&q=80',
  title: '나에게 추억이란 복덩이를, WADONG',
  parts: ['BACKEND', 'DESIGN'],
  category: '애플리케이션',
  place: 'HIGHTHON : NewYear(2020)',
  date: '2020.01.18 ~ 2020.01.19',
});

export const Home: React.FC = () => (
  <Content>
    <ProductSection
      title="🌟 최근 활동"
      products={products}
    >
    </ProductSection>
  </Content>
);

export default Home;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
