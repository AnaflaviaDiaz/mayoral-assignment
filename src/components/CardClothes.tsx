import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { CardClothesInterface } from "@/models/card-clothes.interface";
import { DiscountInterface, DiscountPrice } from "./DiscountPrice";

const Card = styled.div`
  border: 1px solid #01b4ea;
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  margin: 16px 8px;
  border-radius: var(--border-radius-card);
`;

const Figure = styled.figure`
  margin: 0px;
  width: 100%;
  padding: 0;
`;

const ImageCard = styled(Image)`
  width: calc(200px - 16px);
  height: auto;
  padding: 0 8px;
`;

const Title = styled.p`
  display: block;
  max-width: calc(200px - 16px);
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  color: gray;
  text-decoration: ${(props: DiscountInterface) =>
    props.discountPercentage ? "line-through" : "auto"};
`;

interface MoreColorsProps {
  colors?: string[];
}
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
  margin: 8px 0 16px;
  border-radius: var(--border-radius-button);
`;

export const CardClothes = ({
  title,
  alt,
  urlImage,
  price,
  discountPercentage,
  colors,
  ...props
}: CardClothesInterface) => {
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
      <DiscountPrice discountPercentage={discountPercentage} price={price} />

      <MoreColorsLabel colors={colors}>más colores</MoreColorsLabel>
      <AddButton>AÑADIR</AddButton>
    </Card>
  );
};
