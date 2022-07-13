import * as React from 'react';
import styled, { css } from 'styled-components';

type ProgressBarProps = {
  className?: string;
  color: string;
  progress?: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  className = '',
  color,
  progress = 0,
}) => (
  <Container className={className}>
    <Bar color={color} progress={progress} />
  </Container>
);

export default ProgressBar;

const Container = styled.div`
  position: relative;
  background-color: #dce0e3;
  width: 40rem;
  height: 1rem;
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: initial;
  }
`;

type BarProps = {
  color: string;
  progress: number;
};

const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1.5rem 1.5rem;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}

  ${({ progress }) =>
    progress &&
    css`
      width: ${progress}%;
    `}
`;
