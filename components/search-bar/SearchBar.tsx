import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getGitHubData } from '../../store';

import {
  SearchWrapper,
  SearchBtn,
  SearchInput,
  ErrorMessage,
} from './SearchBarStyles';
import SearchIcon from '../../assets/icon-search.svg';

const SearchBar = () => {
  const github = useSelector((state: RootState) => state.github);
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    const query: string = searchRef.current!.value.trim();
    dispatch(getGitHubData(query));
  };
  return (
    <SearchWrapper htmlFor="search">
      <SearchIcon />

      <SearchInput
        placeholder="Search GitHub username…"
        ref={searchRef}
        id="search"
      />

      <SearchBtn onClick={searchHandler}>Search</SearchBtn>
      {github.error && (
        <ErrorMessage>
          <p>No Result</p>
        </ErrorMessage>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
