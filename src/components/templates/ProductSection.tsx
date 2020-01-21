import * as React from 'react';

import Section from '../atoms/Section';
import { TitleText } from '../atoms/Text';

type ProductSectionProps = {
  title: string,
  children: React.ReactNode;
};

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  children,
}) => {
  return (
    <Section>
      <TitleText>
        {title}
      </TitleText>
      {children}
    </Section>
  );
};

export default ProductSection;
