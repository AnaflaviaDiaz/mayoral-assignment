import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonIcon = styled.button`
  background: transparent;
  border: 0px;
  color: gray;
  margin: 8px 16px
  ;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const IncreaseDecreaseProducts = () => {
  return (
    <div>
      <ButtonIcon>
        <FontAwesomeIcon icon={faMinus} size="lg" />
      </ButtonIcon>
      <ButtonIcon>
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </ButtonIcon>
    </div>
  );
};
