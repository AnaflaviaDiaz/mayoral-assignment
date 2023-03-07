import React from "react";
import styled from "styled-components";

export interface DiscountInterface {
  discountPercentage?: number;
}

const Discount = styled.span`
  color: ${(props: DiscountInterface) =>
    props.discountPercentage ? "red" : "gray"};
  visibility: ${(props: DiscountInterface) =>
    props.discountPercentage ? "" : "hidden"};
`;

export const DiscountPrice = ({ discountPercentage, price }: any) => {
  const getDiscountAmountWithCurrency = (
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
      {getDiscountAmountWithCurrency(discountPercentage, price)}
    </Discount>
  );
};
