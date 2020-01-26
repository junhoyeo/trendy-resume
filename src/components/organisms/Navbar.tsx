import React, { useState } from 'react';
import styled from 'styled-components';

import Section from '../atoms/Section';
import NavItem from '../molecules/NavItem';

import { INavigation } from '../../utils/types';

const navigations: INavigation[] = [
  { name: '홈', href: '#' },
  { name: '개발 스택', href: '#stacks' },
  { name: '최근 프로젝트', href: '#recent' },
];

export const Navbar: React.FC = () => {
  const [selectedHref, setSelectedHref] = useState<string>('#');

  const onClickNavItem = (href: string) => {
    setSelectedHref(href);
    location.href = href;
  };

  return (
    <NavbarContainer>
      <NavList>
        {navigations.map(({ name, href }, idx) => (
          <NavItem
            key={`navitem-${idx}`}
            name={name}
            href={href}
            selected={selectedHref === href}
            onClick={onClickNavItem}
          />
        ))}
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  /* position: sticky; */
  /* top: 0; */
  background-color: white;
  /* z-index: 999; */
`;

const NavList = styled(Section)`
  flex-direction: row;
`;
