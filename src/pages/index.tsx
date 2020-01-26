import * as React from 'react';
import styled from 'styled-components';

import ProductSection from '../components/templates/ProductSection';
import StackSection from '../components/templates/StackSection';

import { IProduct, IStack } from '../utils/types';

import '../styles/global.scss';

const stacks: IStack[] = Array(5).fill({
  name: 'React',
  image: 'react.png',
  skill: 80,
  color: '#52C1DE',
  desc: '원하는 앱을 설계하고, 어쩌고 해서 만들 수 있습니다.',
});

const products: IProduct[] = Array(8).fill({
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fit=crop&w=1950&q=80',
  title: '나에게 추억이란 복덩이를, WADONG',
  parts: ['BACKEND', 'DESIGN'],
  category: '애플리케이션',
  place: 'HIGHTHON : NewYear(2020)',
  date: '2020.01.18 ~ 2020.01.19',
});

export const Home: React.FC = () => (
  <Content>
    <StackSection
      title="🍰 스택 맛보기"
      stacks={stacks}
    />
    <ProductSection
      title="🌟 최근 활동"
      products={products}
    />
  </Content>
);

export default Home;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
