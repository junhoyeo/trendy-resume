import * as React from 'react';
import styled from 'styled-components';

import { IStack } from '@/utils/types';

import Text from '../atoms/Text';
import Label from '../molecules/Label';
import ProgressBar from '../molecules/ProgressBar';

export const StackCard: React.FC<IStack> = ({
  name,
  skill,
  image,
  description,
  color = 'dodgerblue',
}) => {
  return (
    <StackContainer>
      <StackImage src={`static/stacks/${image}`} draggable="false" />
      <StackInfo>
        <StackName>{name}</StackName>
        <StackDescription>{description}</StackDescription>
        <StackProgressBar color={color} progress={skill} />
      </StackInfo>
    </StackContainer>
  );
};

export default StackCard;

const StackContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0.5rem 0;
  align-items: center;
`;

const StackImage = styled.img`
  width: 3.5rem;
  filter: drop-shadow(1px 2px 5px rgba(30, 144, 255, 0.2));
`;

const StackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 80%;

  @media (max-width: 1024px) {
    width: -webkit-fill-available;
  }
`;

const StackName = styled(Text)`
  font-size: 1.2rem;
  font-weight: 700;
`;

const StackDescription = styled(Label)``;

const StackProgressBar = styled(ProgressBar)`
  margin-top: 0.5rem;
`;
