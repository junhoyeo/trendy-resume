import React, { useState } from 'react';
import styled from 'styled-components';

import navigations from '@/data/navigations.json';
import { INavigation } from '@/utils/types';

import Section from '../atoms/Section';
import NavItem from '../molecules/NavItem';

export const Navbar: React.FC = () => {
  const [selectedHref, setSelectedHref] = useState<string>('#');

  const onClickNavItem = (href: string) => {
    setSelectedHref(href);
    window.location.href = href;
  };

  return (
    <NavbarContainer>
      <NavList>
        {navigations.map(({ name, href }: INavigation, idx) => (
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
