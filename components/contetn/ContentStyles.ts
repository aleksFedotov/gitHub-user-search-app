import styled, { css } from 'styled-components';

import { media } from '../../styles/GloabalStyles';

interface PropsType {
  isNotAvailable: boolean | null | string;
}

export const ContnetWrapper = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  box-shadow: 0 1.6rem 3rem -1rem rgba(70, 88, 109, 0.2);
  background-color: ${({ theme }) => theme.bg};
  padding: 4.4rem 4.8rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'Avatar ContentHeader' 'Avatar ContentMain';
  color: ${({ theme }) => theme.bodyPrimary};
  gap: 2rem;

  ${media.tablet} {
    grid-template-areas: 'Avatar ContentHeader' 'ContentMain ContentMain';
  }

  ${media.phone} {
    padding: 3.2rem 2.4rem;
  }
`;

export const Avatar = styled.img`
  width: 11.7rem;
  height: 11.7rem;
  border-radius: 50%;
  grid-area: Avatar;
  margin-right: 1.7rem;

  ${media.phone} {
    width: 7rem;
    height: 7rem;
    margin-right: 0;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: ContentHeader;

  ${media.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`;

export const UserName = styled.div`
  h2 {
    font-size: var(--font-size-heading-l);
    line-height: var(--line-height-header-l);
    font-weight: 700;
  }

  p {
    font-size: var(--font-size-heading-s);
    line-height: var(--line-height-header-s);
    color: var(--color-blue);
    font-weight: 500;
  }

  ${media.phone} {
    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;

export const ContentText = styled.p`
  color: ${({ theme }) => theme.bodySecondary};
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);

  ${media.phone} {
    font-size: 1.3rem;
  }
`;

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ContentMain;
`;

export const StatsWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.mainBg};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3.3rem;
  margin-top: 3.2rem;
  margin-bottom: 3.8rem;

  ${media.phone} {
    padding: 1.5rem 2.8rem;
  }
`;

export const Stat = styled.div`
  text-align: left;

  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.bodyPrimary};
  }

  h3 {
    font-size: var(--font-size-heading-m);
    line-height: var(--line-height-header-m);
    color: ${({ theme }) => theme.heading};
  }

  ${media.phone} {
    text-align: center;

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;

  ${media.phone} {
    flex-direction: column;
  }
`;

export const Conctact = styled.div<PropsType>`
  display: flex;
  gap: 1.4rem;
  margin-bottom: 2rem;
  align-items: center;
  color: ${({ theme }) => theme.bodyPrimary};
  font-size: var(--font-size-body);

  svg {
    width: 2rem;
    path {
      fill: ${({ theme }) => theme.bodyPrimary};
    }
  }

  a {
    color: inherit;
    font-size: inherit;
  }

  ${({ isNotAvailable }) =>
    isNotAvailable &&
    css`
      opacity: 0.5;
    `}

  ${media.phone} {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
`;
