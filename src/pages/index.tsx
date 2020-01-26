import * as React from 'react';
import styled from 'styled-components';

import { Header } from '../components/templates/Header';
import ProductSection from '../components/templates/ProductSection';
import StackSection from '../components/templates/StackSection';

import { IProduct, IStack, ISocial } from '../utils/types';

import '../styles/global.scss';

const social: ISocial[] = [
  {
    name: 'github',
    icon: 'fab fa-github',
    href: 'https://github.com/junhoyeo',
  },
  {
    name: 'facebook',
    icon: 'fab fa-facebook',
    href: 'https://www.facebook.com/juno3704',
  },
];

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

const posts: IProduct[] = Array(4).fill({
  image: 'https://useknowledge-git-post-variance.junhoyeo.now.sh/static/6bf30522dd29ed802ee4ca026ecae3a5/f65ec/pikachu.png',
  title: '포켓몬 타입에는 없는 변성 알아보기',
  parts: ['TYPE-LEVEL', 'PROGRAMMING'],
  category: '타입스크립트',
  date: '2020.01.09 ~ 2020.01.27',
});

export const Home: React.FC = () => (
  <Content>
    <Header
      social={social}
    />
    <StackSection
      id="stacks"
      title="🍰 스택 맛보기"
      stacks={stacks}
    />
    <ProductSection
      id="recent"
      title="🌟 최근 활동"
      products={products}
    />
    <ProductSection
      id="blog"
      title="📖 블로그 살펴보기"
      products={posts}
    />
  </Content>
);

export default Home;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
