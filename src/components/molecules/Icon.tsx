import styled from 'styled-components';

type IconProps = {
  className?: string;
  icon: string;
  onClick?: () => void;
};

export const Icon = styled.i.attrs(({ className = '', icon }: IconProps) => ({
  className: `${icon} ${className}`,
}))<IconProps>`
  cursor: pointer;
`;

export default Icon;
