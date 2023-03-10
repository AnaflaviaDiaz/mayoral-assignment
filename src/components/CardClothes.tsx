import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { DiscountProps, DiscountPrice } from "./DiscountPrice";
import { ClothesProps } from "@/models/clothes.props";

const Card = styled.div`
  border: 1px solid var(--primary-color);
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--width-card-mobile);
  margin: var(--space2) var(--space1);
  border-radius: var(--border-radius-card);

  @media (min-width: 425px) {
    max-width: 200px;
  }
`;

const Figure = styled.figure`
  margin: 0px;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const ImageCard = styled(Image)`
  height: auto;
  width: inherit;
  padding: var(--space1);
`;

const Title = styled.p`
  display: block;
  max-width: calc(var(--width-card-mobile) - var(--space2));
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;

const Price = styled.span`
  color: gray;
  text-decoration: ${(props: DiscountProps) =>
    props.discountPercentage ? "line-through" : "auto"};
`;

const MoreColorsLabel = styled.p`
  color: gray;
  visibility: ${(props: MoreColorsProps) =>
    props.colors?.length ? "" : "hidden"};
`;

const AddButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: var(--space1);
  margin: var(--space1) 0 var(--space2);
  border-radius: var(--border-radius-button);
`;

interface MoreColorsProps {
  colors?: string[];
}
interface CardClothesProps extends ClothesProps {
  children?: React.ReactNode;
  alt: string;
}

export const CardClothes = ({
  title,
  alt,
  urlImage,
  price,
  discountPercentage,
  colors,
}: CardClothesProps) => {
  const getAmountWithCurrency = (price: number) => {
    const amount = price.toString().replace(".", ",");
    return `${amount} €`;
  };

  return (
    <Card>
      <Figure>
        <ImageCard src={urlImage} alt={alt} width={100} height={100} priority />
      </Figure>

      <Title>{title}</Title>

      <Price discountPercentage={discountPercentage}>
        {getAmountWithCurrency(price)}
      </Price>
      <DiscountPrice
        discountPercentage={discountPercentage || 0}
        price={price}
      />

      <MoreColorsLabel colors={colors}>más colores</MoreColorsLabel>
      <AddButton>AÑADIR</AddButton>
    </Card>
  );
};
