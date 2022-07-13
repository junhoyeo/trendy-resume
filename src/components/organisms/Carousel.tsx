import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import avatars from '@/data/avatar.json';
import info from '@/data/info.json';
import getRandomSelect from '@/utils/getRandomSelect';
import { IAvatar } from '@/utils/types';

import { Section } from '../atoms/Section';
import { TitleText } from '../atoms/Text';
import Label from '../molecules/Label';

const {
  catchphrase: { text: catchphraseText, description: catchphraseDescription },
} = info;

export const Carousel: React.FC = () => {
  const [avatar, setAvatar] = useState<IAvatar>({
    image: 'default.png',
    contain: true,
  });

  const onChangeAvatar = () => setAvatar(getRandomSelect<IAvatar>(avatars));

  useEffect(onChangeAvatar);
  const { image: profile, contain = false } = avatar;
  return (
    <CarouselContainer>
      <Content>
        <Title>
          {catchphraseText.split('\n').map((text, textIndex) => (
            <span key={textIndex}>{text}</span>
          ))}
        </Title>
        {catchphraseDescription.map((description, descriptionIndex) => (
          <Description key={descriptionIndex}>{description}</Description>
        ))}
        <Profile
          src={`static/avatar/${profile}`}
          draggable="false"
          contain={contain}
        />
      </Content>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  background-color: dodgerblue;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 30px 3px rgba(0, 0, 0, 0.15);
`;

const Content = styled(Section)`
  padding: 3rem 0;
  position: relative;
`;

const Title = styled(TitleText)`
  color: white;
  text-shadow: 0px 1px 9px rgba(0, 0, 0, 0.28);
  font-size: 3.2rem;
  margin: 0;
  margin-bottom: 0.5rem;
  line-height: 1.25;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled(Label)`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

type ProfileProps = {
  contain: boolean;
};

const Profile = styled.img<ProfileProps>`
  position: absolute;
  right: 0;
  top: -3%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 10px solid white;
  box-shadow: 1px 1px 30px 3px rgba(30, 144, 255, 0.15);
  object-fit: cover;
  object-position: top;
  background-color: #f0c14f;

  ${({ contain }) =>
    contain &&
    css`
      object-fit: contain;
    `};

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    top: 13%;
    right: 0;
  }

  @media (max-width: 500px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 352px) {
    width: 80px;
    height: 80px;
    border-width: 6px;
  }

  @media (max-width: 330px) {
    width: 78px;
    height: 78px;
  }
`;
