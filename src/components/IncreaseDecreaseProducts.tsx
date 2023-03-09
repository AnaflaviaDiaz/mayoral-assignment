import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { devicesSize } from "@/data/device-size";

const ButtonIcon = styled.button`
  background: transparent;
  border: 0px;
  color: gray;
  margin: var(--space1) var(--space2);

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  order: 1;
  margin: var(--space2) 0;

  @media ${devicesSize.mobileL} {
    order: 2;
  }
`;

interface IncreaseDecreaseProductsProps {
  handleClickDecrease: () => void;
  handleClickIncrease: () => void;
}

export const IncreaseDecreaseProducts = ({ handleClickDecrease, handleClickIncrease }: IncreaseDecreaseProductsProps) => {
  return (
    <ButtonContainer>
      <ButtonIcon onClick={handleClickDecrease}>
        <FontAwesomeIcon icon={faMinus} size="lg" />
      </ButtonIcon>
      <ButtonIcon onClick={handleClickIncrease}>
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </ButtonIcon>
    </ButtonContainer>
  );
};
