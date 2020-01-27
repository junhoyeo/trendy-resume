import styled from 'styled-components';

export const Section = styled.section`
  width: 83%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 92%;
  }
`;

export default Section;
