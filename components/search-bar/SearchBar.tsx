import React from 'react';

import { SearchWrapper, SearchBtn, SearchInput } from './SearchBarStyles';
import SearchIcon from '../../assets/icon-search.svg';

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput placeholder="Search GitHub username…" />
      <SearchBtn>Search</SearchBtn>
    </SearchWrapper>
  );
};

export default SearchBar;
