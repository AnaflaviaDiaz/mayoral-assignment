import React from "react";
import styled from "styled-components";

export interface DiscountProps {
  discountPercentage?: number;
}

const Discount = styled.span`
  color: ${(props: DiscountProps) =>
    props.discountPercentage ? "red" : "gray"};
  visibility: ${(props: DiscountProps) =>
    props.discountPercentage ? "" : "hidden"};
`;

export const DiscountPrice = ({ discountPercentage, price }: any) => {
  const getFormatDiscountAmount = (
    discountPercentage: number,
    price: number
  ) => {
    const amountWithDiscount = (discountPercentage / 100) * price;
    return `${amountWithDiscount
      .toFixed(2)
      .toString()
      .replace(".", ",")} €(${discountPercentage}%)`;
  };

  return (
    <Discount discountPercentage={discountPercentage}>
      {getFormatDiscountAmount(discountPercentage, price)}
    </Discount>
  );
};
