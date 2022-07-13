import * as React from 'react';
import styled, { css } from 'styled-components';

import { INavigation } from '@/utils/types';

import { Text } from '../atoms/Text';

interface ISelected {
  selected?: boolean;
}

interface INavItem extends ISelected, INavigation {
  onClick: (href: string) => void;
}

export const NavItem: React.FC<INavItem> = ({
  name,
  href,
  onClick,
  selected = false,
}) => (
  <NavContainer selected={selected} onClick={() => onClick(href)}>
    <NavText>{name}</NavText>
  </NavContainer>
);

export default NavItem;

const NavContainer = styled.div<ISelected>`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: rgba(30, 144, 255, 0.65);
  border-bottom: 4.2px solid rgba(30, 144, 255, 0.65);
  min-width: 4.2rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  @media (max-width: 500px) {
    min-width: 2rem;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: royalblue;
      border-bottom-color: royalblue;
    `};
`;

const NavText = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: 352px) {
    font-size: 12px;
  }
`;
