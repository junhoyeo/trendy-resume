import * as React from 'react';
import styled from 'styled-components';

import info from '@/data/info.json';
import openNewWindow from '@/utils/openNewWindow';
import { ISocial } from '@/utils/types';

import Section from '../atoms/Section';
import Text, { TitleText } from '../atoms/Text';
import { Icon } from '../molecules/Icon';
import Carousel from '../organisms/Carousel';
import Navbar from '../organisms/Navbar';

type HeaderProps = {
  social: ISocial[];
};

const { title, author } = info;

export const Header: React.FC<HeaderProps> = ({ social }) => {
  return (
    <>
      <HeaderSection>
        <Brand>
          <Title>{title}</Title>
          <Author>@{author}</Author>
        </Brand>
        <IconList>
          {social.map(({ icon, href }, idx) => (
            <SocialIcon
              key={`icon-${idx}`}
              icon={icon}
              onClick={() => openNewWindow(href)}
            />
          ))}
        </IconList>
      </HeaderSection>
      <Navbar />
      <Carousel />
    </>
  );
};

export default Header;

const HeaderSection = styled(Section)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0.8rem 0;
`;

const Title = styled(TitleText)`
  margin: 0;
  font-size: 1.5rem;
`;

const Author = styled(Text)`
  font-size: 12px;
  margin-left: 0.2rem;
  font-weight: 500;
  color: dodgerblue;
`;

const IconList = styled.div`
  display: flex;
`;

const SocialIcon = styled(Icon)`
  font-size: 1.5rem;
  color: rgba(30, 144, 255, 0.5);
  transition: color 0.2s ease;

  &:not(:last-child) {
    margin-right: 0.3rem;
  }

  &:hover {
    color: black;
  }
`;
