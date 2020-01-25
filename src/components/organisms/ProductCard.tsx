import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';

type ProductCardProps = {
  category: string;
  title: string;
  part: string[];
  place: string;
  date: string;
  image: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  category = '',
  title,
  part = [''],
  place = '',
  date = '',
  image,
}) => {
  return (
    <CardContainer>
      <CardImage
        src={image}
      />
      <CardInfo>
        <CardRow>
          <CardPart>
            {part.join(', ')}
          </CardPart>
        </CardRow>
        <CardCategory>
          {category}
        </CardCategory>
        <CardTitle>
          {title}
        </CardTitle>
        <CardRow>
          <CardPlace>
            {place}
          </CardPlace>
          <CardDate>
            {date}
          </CardDate>
        </CardRow>
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
`;

const CardImage = styled.img`
  height: 350px;
  min-width: 100%;
  object-fit: cover;
`;

const CardInfo = styled.div`
`;

const CardRow = styled.div`
`;

const CardCategory = styled(Text)`
`;

const CardPart = styled(Text)`
`;

const CardTitle = styled(Text)`
`;

const CardPlace = styled(Text)`
`;

const CardDate = styled(Text)`
`;
