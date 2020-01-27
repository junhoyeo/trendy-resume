import * as React from 'react';
import styled from 'styled-components';

import Section from '../atoms/Section';
import { TitleText } from '../atoms/Text';
import ProductCard from '../organisms/ProductCard';
import SkeletonCard from '../organisms/SkeletonCard';

import { IProduct } from '../../utils/types';
import useWindowSize from '../../utils/useWindowSize';

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
  const { width = 0 } = useWindowSize();
  const [lack, cardsInOneRow] = ((width: number): [number, number] => {
    if (width < 400) {
      return [0, 0];
    }
    const cardsInOneRow = (width <= 950) ? 2 : 4;
    return [
      products.length % cardsInOneRow,
      cardsInOneRow,
    ];
  })(width);

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
        {!lack || [...Array(cardsInOneRow - lack)].map((_, idx: number) => (
          <SkeletonCard
            key={`skeleton-${idx}`}
          />
        ))}
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
