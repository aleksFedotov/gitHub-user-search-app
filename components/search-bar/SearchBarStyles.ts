import styled from 'styled-components';

import { media } from '../../styles/GloabalStyles';

export const SearchWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 1.6rem 3rem -1rem rgba(70, 88, 109, 0.2);
  background-color: ${({ theme }) => theme.bg};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.2rem;

  svg {
    margin-left: 2.2rem;
    width: 2.4rem;
    height: 2.4rem;
  }

  ${media.phone} {
    gap: 0rem;
    svg {
      margin-left: 0.6rem;
      margin-right: 0.8rem;
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const SearchBtn = styled.button`
  max-width: 10.6rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-blue);
  border: none;
  padding: 1.2rem 0;
  font-family: inherit;
  color: #ffff;
  cursor: pointer;
  margin-left: auto;
  transition: transform 0.3s ease;

  &:hover {
    background-color: var(--color-blue-hover);
  }
  &:active {
    transform: scale(0.98);
  }

  ${media.phone} {
    max-width: 8.4rem;
  }
`;

export const SearchInput = styled.input`
  width: 70%;
  background-color: transparent;
  border: none;
  display: block;
  font-size: 1.8rem;
  font-family: inherit;
  color: ${({ theme }) => theme.bodySecondary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: inherit;
  }

  ${media.phone} {
    font-size: 1.3rem;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  right: 14rem;
  color: #f74646;
  font-size: var(--font-size-body);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: fit-content;

  ${media.tablet} {
    background-color: ${({ theme }) => theme.bg};
    box-shadow: 0 1.6rem 3rem -1rem rgba(70, 88, 109, 0.2);
    left: 50%;
    transform: translateX(-50%);
    margin-top: -11rem;
  }
  ${media.phone} {
    font-size: 1.3rem;
  }
`;
