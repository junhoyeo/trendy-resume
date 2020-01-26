import React from 'react';
import styled from 'styled-components';

import { Section } from '../atoms/Section';
import { TitleText } from '../atoms/Text';
import Label from '../molecules/Label';

export const Carousel: React.FC = () => {
  return (
    <CarouselContainer>
      <Content>
        <Title>
          프론트엔드는<br />
          필연적입니다.
        </Title>
        <Label>
          불가능한 프론트엔드는 없다고 믿습니다.
        </Label>
        <Label>
          그렇기 때문에 오늘도 성장하기 위한 노력을 하고 있죠.
        </Label>
        <Profile
          src="https://via.placeholder.com/150"
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
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const Profile = styled.img`
  position: absolute;
  right: 3rem;
  top: -5%;
  width: 300px;
  border-radius: 50%;
  border: 10px solid white;
  box-shadow: 1px 1px 30px 3px rgba(30, 144, 255, 0.15);
`;
