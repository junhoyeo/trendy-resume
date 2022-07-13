import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { IProduct } from '@/utils/types';

import Text from '../atoms/Text';
import Label from '../molecules/Label';
import OverlayCard from './OverlayCard';

interface IProductCard extends IProduct {
  className?: string;
  noClick?: boolean;
}

export const ProductCard: React.FC<IProductCard> = ({
  className = '',
  category = '',
  title,
  parts = [''],
  place = '',
  date = '',
  image,
  description = '',
  links = [],
  noClick = false,
}) => {
  const [overlay, setOverlay] = useState<boolean>(false);

  const onClickCard = () => setOverlay(!overlay);

  return (
    <CardContainer
      className={className}
      onClick={noClick ? undefined : onClickCard}
    >
      <CardImage src={image} className="image">
        <CardPartList>
          {parts.map((part, idx) => (
            <CardPart key={`part-${idx}`}>{part}</CardPart>
          ))}
        </CardPartList>
        <OverlayCard hide={!overlay} description={description} links={links} />
      </CardImage>
      <CardInfo>
        <CardCategory className="category">{category}</CardCategory>
        <CardTitle className="title">{title}</CardTitle>
        <CardMeta>
          <CardPlace className="place">{place}</CardPlace>
          <CardDate className="date">{date}</CardDate>
        </CardMeta>
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
  margin-bottom: 2rem;
  cursor: pointer;

  @media (max-width: 1400px) {
    padding: 0 0.45rem;

    &:first-child {
      padding-left: 0;
    }

    &:nth-child(4n) {
      padding-right: 0;
    }
  }

  @media (max-width: 950px) {
    padding: 0;
    flex-basis: 51%;
    position: relative;
    max-width: 47%;
  }

  @media (max-width: 400px) {
    max-width: 100%;
    float: unset;
    position: unset;
    flex-basis: 100%;
  }
`;

type CardImageProps = {
  src: string;
};

const CardImage = styled.div<CardImageProps>`
  height: 350px;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 4px;

  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
    `}

  @media (max-width: 400px) {
    height: 180px;
  }
`;

const CardInfo = styled.div`
  margin-top: 0.5rem;
`;

const CardCategory = styled(Text)`
  font-weight: 700;
  font-size: 90%;
  width: 100%;
  display: block;
  color: dodgerblue;
  font-size: 12px;
  margin-bottom: 0.25rem;
`;

const CardPartList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const CardPart = styled(Text)`
  font-weight: 800;
  background-color: white;
  display: inline-block;
  width: fit-content;
  margin-bottom: 0.5rem;
  font-size: 16px;
  padding: 1px 5px;
  border-radius: 4px;
  box-shadow: 1px 1px 30px 3px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled(Text)`
  font-weight: 700;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;
  width: 100%;
  letter-spacing: -0.5px;
  font-size: 20px;
  line-height: 0.9;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
`;

const CardPlace = styled(Label)``;

const CardDate = styled(Label)``;
