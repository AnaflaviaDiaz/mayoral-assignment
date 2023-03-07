import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm = styled.form`
  border: 1px solid gray;
  width: 80%;
  /* display: flex;
  flex: auto;
  align-items: center; */
`;

const InputSearch = styled.input`
  padding: 8px;
  border: none;
  flex: auto;
  width: calc(100% - 40px);

  &:focus-visible {
    outline: none;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  color: gray;
  width: 16px;
`

export const SearchInput = () => {
  return <SearchForm>
    <SearchIcon icon={faSearch} />
    <InputSearch placeholder="Buscar" />
  </SearchForm>
};
