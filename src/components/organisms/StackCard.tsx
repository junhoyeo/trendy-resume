import * as React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';
import Label from '../molecules/Label';
import ProgressBar from '../molecules/ProgressBar';

import { IStack } from '../../utils/types';

export const StackCard: React.FC<IStack> = ({ name, skill, image, desc }) => {
  return (
    <StackContainer>
      <StackImage
        src={`static/stacks/${image}`}
      />
      <StackInfo>
        <StackName>
          {name}
        </StackName>
        <StackDesc>
          {desc}
        </StackDesc>
        <StackProgressBar
          progress={skill}
        />
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
  height: 3.5rem;
  filter: drop-shadow(1px 2px 5px #dbedff);
`;

const StackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 80%;
`;

const StackName = styled(Text)`
  font-size: 1.2rem;
  font-weight: 700;
`;

const StackDesc = styled(Label)`
`;

const StackProgressBar = styled(ProgressBar)`
  margin-top: 0.5rem;
`;
