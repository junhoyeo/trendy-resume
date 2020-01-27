import * as React from 'react';
import styled from 'styled-components';

import Section from '../atoms/Section';
import { TitleText } from '../atoms/Text';
import ProductCard from '../organisms/ProductCard';

import { IProduct } from '../../utils/types';

type ProductSectionProps = {
  id?: string;
  title: string,
  products: IProduct[];
};

export const ProductSection: React.FC<ProductSectionProps> = ({
  id = '',
  title,
  products,
}) => {
  return (
    <Section
      id={id}
    >
      <SectionTitle>
        {title}
      </SectionTitle>
      <ProductList>
        {products.map((product, idx) => {
          const { category, title, parts, place, date, image, desc, links } = product;
          return (
            <ProductCard
              key={`product-${idx}`}
              category={category}
              title={title}
              parts={parts}
              place={place}
              date={date}
              image={image}
              desc={desc}
              links={links}
            />
          );
        })}
      </ProductList>
    </Section>
  );
};

export default ProductSection;

const SectionTitle = styled(TitleText)`
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
