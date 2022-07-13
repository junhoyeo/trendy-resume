import React, { useMemo } from 'react';
import styled from 'styled-components';

import { IProduct } from '@/utils/types';
import useWindowSize from '@/utils/useWindowSize';

import { NoSSR } from '../NoSSR';
import Section from '../atoms/Section';
import { TitleText } from '../atoms/Text';
import ProductCard from '../organisms/ProductCard';
import SkeletonCard from '../organisms/SkeletonCard';

type ProductSectionProps = {
  id?: string;
  title: string;
  products: IProduct[];
};

const getAlignment = (
  products: IProduct[],
  width: number,
): [number, number] => {
  if (width < 400) {
    return [0, 0];
  }
  const cardsInOneRow = width <= 950 ? 2 : 4;
  return [products.length % cardsInOneRow, cardsInOneRow];
};

export const ProductSection: React.FC<ProductSectionProps> = ({
  id = '',
  title,
  products,
}) => {
  const { width = 0 } = useWindowSize();
  const [lack, cardsInOneRow] = useMemo(
    () => getAlignment(products, width),
    [products, width],
  );

  return (
    <Section id={id}>
      <SectionTitle>{title}</SectionTitle>
      <ProductList>
        {products.map((product, idx) => {
          const {
            category,
            title,
            parts,
            place,
            date,
            image,
            description,
            links,
          } = product;
          return (
            <ProductCard
              key={`product-${idx}`}
              category={category}
              title={title}
              parts={parts}
              place={place}
              date={date}
              image={image}
              description={description}
              links={links}
            />
          );
        })}

        <NoSSR>
          {!!lack &&
            [...Array(cardsInOneRow - lack)].map((_, idx: number) => (
              <SkeletonCard key={`skeleton-${idx}`} />
            ))}
        </NoSSR>
      </ProductList>
    </Section>
  );
};

export default ProductSection;

const SectionTitle = styled(TitleText)``;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
