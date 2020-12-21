import * as React from 'react';
import styled from 'styled-components';

import { ProductCard } from './ProductCard';

export const SkeletonCard: React.FC = () => (
  <Skeleton
    title=""
    category=""
    parts={[]}
    place=""
    date=""
    image=""
    description=""
    links={[]}
    noClick={true}
  />
);

export default SkeletonCard;

const Skeleton = styled(ProductCard)`
  cursor: default;

  div.image {
    background-color: rgba(30, 144, 255, 0.05);
  }

  span.category {
    background-color: rgba(30, 144, 255, 0.08);
    width: 3rem;
    height: 12px;
  }

  span.title {
    background-color: rgba(30, 144, 255, 0.05);
    width: 180px;
    height: 20px;
    display: block;
  }

  span.place {
    background-color: rgba(30, 144, 255, 0.05);
    width: 4rem;
    height: 20px;
  }

  span.date {
    background-color: rgba(30, 144, 255, 0.05);
    width: 8rem;
    height: 20px;
  }
`;
