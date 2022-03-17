import styled, { ThemeConsumer } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.6rem;
`;

export const Logo = styled.h1`
  font-size: var(--font-size-heading-l);
  line-height: var(--line-height-header-l);
  color: ${({ theme }) => theme.heading};
`;

export const ThemeSwither = styled.div`
  display: flex;
  cursor: pointer;
  gap: 1.6rem;
  p {
    font-size: var(--font-size-heading-xs);
    line-height: var(--line-height-header-xs);
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.bodySecondary};
  }

  svg {
    path {
      fill: ${({ theme }) => theme.bodySecondary};
    }
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.hover};
    }

    svg {
      path {
        fill: ${({ theme }) => theme.hover};
      }
    }
  }
`;
