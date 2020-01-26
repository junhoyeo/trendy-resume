import * as React from 'react';
import styled from 'styled-components';

import { Header } from '../components/templates/Header';
import ProductSection from '../components/templates/ProductSection';
import StackSection from '../components/templates/StackSection';

import { IProduct, IStack, ISocial } from '../utils/types';

import '../styles/global.scss';

const social: ISocial[] = require('../data/social.json');
const stacks: IStack[] = require('../data/stacks.json');
const products: IProduct[] = require('../data/products.json');
const posts: IProduct[] = require('../data/posts.json');

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
