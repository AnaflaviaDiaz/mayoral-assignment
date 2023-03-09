import React from "react";
import styled from "styled-components";

const EmptyResultContainer = styled.div`
  padding: var(--space1);
  width: 100%;
`;

const Message = styled.p`
  color: var(--primary-color);
  text-align: center;
`;

export const EmptyResult = () => {
  return (
    <EmptyResultContainer>
      <Message>No hemos encontrado ninguna coincidencia.</Message>
    </EmptyResultContainer>
  );
};
