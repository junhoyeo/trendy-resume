import * as React from 'react';
import styled, { css } from 'styled-components';

import Text from '../atoms/Text';
import Label from '../molecules/Label';

type ProductCardProps = {
  category: string;
  title: string;
  parts: string[];
  place: string;
  date: string;
  image: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  category = '',
  title,
  parts = [''],
  place = '',
  date = '',
  image,
}) => {
  return (
    <CardContainer>
      <CardImage
        src={image}
      >
        <CardPartList>
          {parts.map((part, idx) => (
            <CardPart
              key={`part-${idx}`}
            >
              {part}
            </CardPart>
          ))}
        </CardPartList>
      </CardImage>
      <CardInfo>
        <CardCategory>
          {category}
        </CardCategory>
        <CardTitle>
          {title}
        </CardTitle>
        <CardMeta>
          <CardPlace>
            {place}
          </CardPlace>
          <CardDate>
            {date}
          </CardDate>
        </CardMeta>
      </CardInfo>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 21%;
  flex-direction: column;
  width: 100%;
  max-width: 284.406px;
  position: relative;
  margin-bottom: 2rem;
`;

type CardImageProps = {
  src: string;
};

const CardImage = styled.div<CardImageProps>`
  height: 350px;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 4px;

  ${({ src }) => src && css`
    background-image: url(${src});
  `}
`;

const CardInfo = styled.div`
  margin-top: 0.5rem;
`;

const CardCategory = styled(Text)`
  font-weight: 700;
  font-size: 90%;
  width: 100%;
  display: block;
  color: #1E90FF;
  font-size: 12px;
  margin-bottom: 0.25rem;
`;

const CardPartList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const CardPart = styled(Text)`
  font-weight: 800;
  background-color: white;
  display: inline-block;
  width: fit-content;
  margin-bottom: 0.5rem;
  font-size: 16px;
  padding: 1px 5px;
  border-radius: 4px;
  box-shadow: 1px 1px 30px 3px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled(Text)`
  font-weight: 700;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;
  width: 100%;
  letter-spacing: -0.5px;
  font-size: 20px;
  line-height: 0.9;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
`;

const CardPlace = styled(Label)`
`;

const CardDate = styled(Label)`
`;
