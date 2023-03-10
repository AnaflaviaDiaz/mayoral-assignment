import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = styled.form`
  border: 1px solid gray;
  width: 90%;
  border-radius: var(--border-radius-input);
  order: 3;

  @media (min-width: 425px) {
    width: 50%;
    order: 1;
  }
`;

const InputSearch = styled.input`
  padding: var(--space1);
  border: none;
  flex: auto;
  width: calc(100% - 40px);
  border-radius: var(--border-radius-input);

  &:focus-visible {
    outline: none;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: var(--space1);
  color: gray;
  width: var(--space2);
`;

const Separator = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  margin-top: 32px;
  display: block;
  order: 3;

  @media (min-width: 425px) {
    display: none;
  }
`;

interface SearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ handleChange }: SearchProps) => {
  return (
    <>
      <SearchForm>
        <SearchIcon icon={faSearch} />
        <InputSearch type="text" placeholder="Buscar" onChange={handleChange} />
      </SearchForm>
      <Separator />
    </>
  );
};
