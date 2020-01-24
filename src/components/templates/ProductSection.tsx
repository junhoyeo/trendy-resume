import * as React from 'react';

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
      <TitleText>
        {title}
      </TitleText>
      {products.map(({ category, title, part, place, date, image }, idx) => (
        <ProductCard
          key={`product-${idx}`}
          category={category}
          title={title}
          part={part}
          place={place}
          date={date}
          image={image}
        />
      ))}
    </Section>
  );
};

export default ProductSection;
