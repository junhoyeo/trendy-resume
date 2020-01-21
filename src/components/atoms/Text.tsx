import styled from 'styled-components';

export const Text = styled.span`
`;

export default Text;

export const TitleText = Text.withComponent('h1');
export const SubtitleText = Text.withComponent('h2');
