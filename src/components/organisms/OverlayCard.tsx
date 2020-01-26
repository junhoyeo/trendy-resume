import * as React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';
import Icon from '../molecules/Icon';

import openNewWindow from '../../utils/openNewWindow';

interface ILink {
  icon: string;
  text: string;
  href: string;
}

const links: ILink[] = [
  {
    icon: 'fas fa-book',
    text: '포스트 읽으러 가기',
    href: 'https://github.com/junhoyeo',
  },
  {
    icon: 'fab fa-github',
    text: '안드로이드 코드 보기',
    href: 'https://github.com/junhoyeo',
  },
  {
    icon: 'fab fa-github',
    text: '백엔드 코드 보기',
    href: 'https://github.com/junhoyeo',
  },
];

type OverlayCardProps = {
  hide?: boolean;
};

export const OverlayCard: React.FC<OverlayCardProps> = ({ hide }) => {
  if (hide) {
    return (null);
  }

  const onClickLink = (
    event: React.MouseEvent<HTMLLIElement>,
    href: string,
  ) => {
    event.stopPropagation();
    openNewWindow(href);
  };

  return (
    <OverlayContainer>
      <Description>
        (대충 이 프로젝트가 뭐하는 거고 뭐 담당했는지 알려주는 아무말 같은 설명), 와!
        <Separator />
      </Description>
      <IconList>
        {links.map(({ icon, text, href }, idx) => (
          <Link
            key={`link-${idx}`}
            onClick={(event) => onClickLink(event, href)}
          >
            <LinkIcon
              icon={icon}
            />
            <LinkText>
              {text}
            </LinkText>
          </Link>
        ))}
      </IconList>
    </OverlayContainer>
  );
};

export default OverlayCard;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled(Text)`
  color: white;
  font-size: 15px;
  letter-spacing: -0.5px;
  line-height: 1.35;
`;

const Separator = styled.div`
  width: 30%;
  height: 1px;
  background-color: white;
  margin-top: 0.8rem;
`;

const IconList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Link = styled.li`
  color: white;
  width: fit-content;
  padding: 0 0.3rem;
  border: 2.5px solid rgba(255, 255, 255, 0.9);
  margin-top: 10px;

  &:hover {
    background-color: white;
    color: black;
    border-color: dodgerblue;
  }
`;

const LinkIcon = styled(Icon)`
  font-size: 16px;
`;

const LinkText = styled(Text)`
  margin-left: 0.5rem;
  font-size: 15px;
  font-weight: 700;
`;
