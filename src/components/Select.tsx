import React from "react";
import styled from "styled-components";

import { devicesSize } from "@/data/device-size";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  options: SelectOption[];
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
  title?: string;
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;

  @media ${devicesSize.mobileL} {
    order: 2;
  }
`;

const SelectInput = styled.select`
  padding: var(--space1);
  border: 1px solid gray;
  border-radius: 4px;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const Select = ({ id, options, title, handleChange, ...props }: SelectProps) => {
  return (
    <SelectContainer>
      <label htmlFor={id}>{title}</label>
      <SelectInput name="order-by" id={id} {...props} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectInput>
    </SelectContainer>
  );
};
