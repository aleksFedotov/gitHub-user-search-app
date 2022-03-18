import styled from 'styled-components';

export const SearchWrapper = styled.div`
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
`;
