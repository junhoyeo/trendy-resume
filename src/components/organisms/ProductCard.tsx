import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';

type ProductCardProps = {
  category: string;
  title: string;
  part: string;
  place: string;
  date: Date;
  image: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  category = '',
  title,
  part = '',
  place = '',
  date = new Date(),
  image,
}) => {
  return (
    <CardContainer>
      <CardImage
        src={image}
      />
      <CardInfo>
        <CardRow>
          <CardCategory>
            {category}
          </CardCategory>
        </CardRow>
        <CardPart>
          {part}
        </CardPart>
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
`;

const CardImage = styled.img`
`;

const CardInfo = styled.div`
`;

const CardRow = styled.div`
`;

const CardCategory = styled.span`
`;

const CardTitle = styled(Text)`
`;

const CardPlace = styled(Text)`
`;

const CardDate = styled(Text)`
`;
