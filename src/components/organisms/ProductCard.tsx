import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';

type ProductCardProps = {
  title: string;
  image: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
}) => {
  return (
    <CardContainer>
      <CardImage
        src={image}
      />
      <CardInfo>
        <CardTitle>
          {title}
        </CardTitle>
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

const CardTitle = styled(Text)`
`;
