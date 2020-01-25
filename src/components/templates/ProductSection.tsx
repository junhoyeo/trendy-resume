import * as React from 'react';
import styled from 'styled-components';

import Section from '../atoms/Section';
import { TitleText } from '../atoms/Text';
import { ProductCard } from '../organisms/ProductCard';

import { IProduct } from '../../utils/types';

type ProductSectionProps = {
  title: string,
  products: IProduct[];
};

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
}) => {
  return (
    <Section>
      <SectionTitle>
        {title}
      </SectionTitle>
      <ProductList>
        {products.map(({ category, title, parts, place, date, image }, idx) => (
          <ProductCard
            key={`product-${idx}`}
            category={category}
            title={title}
            parts={parts}
            place={place}
            date={date}
            image={image}
          />
        ))}
      </ProductList>
    </Section>
  );
};

export default ProductSection;

const SectionTitle = styled(TitleText)`
  font-weight: 700;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
