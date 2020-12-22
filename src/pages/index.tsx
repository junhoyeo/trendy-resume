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
    <Header social={social} />
    <StackSection
      id="stacks"
      title="🍰 스택 맛보기"
      // Stacks
      stacks={stacks}
    />
    <ProductSection
      id="recent"
      title="🌟 최근 활동"
      // Recent projects
      products={products}
    />
    <ProductSection
      id="blog"
      title="📖 블로그 살펴보기"
      // Blog
      products={posts}
    />
    <Footer>
      <FooterText>
        © 2021{' '}
        <a href="https://github.com/junhoyeo/trendy-resume" target="_blank">
          Junho Yeo
        </a>
        . All rights reserved.
      </FooterText>
    </Footer>
  </Content>
);

export default Home;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  padding: 1.5rem 0;
`;

const FooterText = styled.span`
  font-weight: 900;
  color: rgba(30, 144, 255, 0.65);

  a {
    color: dodgerblue;
    text-decoration: none;
  }
`;
