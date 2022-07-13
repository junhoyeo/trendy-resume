import * as React from 'react';
import styled from 'styled-components';

import { IStack } from '@/utils/types';

import Section from '../atoms/Section';
import { TitleText } from '../atoms/Text';
import StackCard from '../organisms/StackCard';

type StackSectionProps = {
  id?: string;
  title: string;
  stacks: IStack[];
};

export const StackSection: React.FC<StackSectionProps> = ({
  id = '',
  title,
  stacks,
}) => {
  return (
    <Section id={id}>
      <SectionTitle>{title}</SectionTitle>
      <StackList>
        {stacks.map(({ name, image, skill, color, description }, idx) => (
          <StackCard
            key={`stack-${idx}`}
            name={name}
            image={image}
            skill={skill}
            color={color}
            description={description}
          />
        ))}
      </StackList>
    </Section>
  );
};

export default StackSection;

const SectionTitle = styled(TitleText)``;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
`;
