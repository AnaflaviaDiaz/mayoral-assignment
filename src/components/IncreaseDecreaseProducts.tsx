import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { devicesSize } from "@/data/device-size";

const ButtonIcon = styled.button`
  background: transparent;
  border: 0px;
  color: gray;
  margin: 8px 16px;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  order: 1;
  margin: 16px 0;

  @media ${devicesSize.mobileL} {
    order: 2;
  }
`;

export const IncreaseDecreaseProducts = () => {
  return (
    <ButtonContainer>
      <ButtonIcon>
        <FontAwesomeIcon icon={faMinus} size="lg" />
      </ButtonIcon>
      <ButtonIcon>
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </ButtonIcon>
    </ButtonContainer>
  );
};
