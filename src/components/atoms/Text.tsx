import styled from 'styled-components';

export const Text = styled.span``;

export default Text;

export const TitleText = styled(Text.withComponent('h1'))`
  font-weight: 700;
`;
