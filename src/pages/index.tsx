import * as React from 'react';
import styled from 'styled-components';

import ProductSection from '../components/templates/ProductSection';

import { IProduct } from '../utils/types';

import '../styles/global.scss';

const products: IProduct[] = [
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fit=crop&w=1950&q=80',
    title: 'WADONG',
    part: ['BACKEND', 'DESIGN'],
    category: 'APP',
    place: '하이톤',
    date: '2020',
  },
];

export const Home: React.FC = () => (
  <Content>
    <ProductSection
      title="최근 활동"
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
