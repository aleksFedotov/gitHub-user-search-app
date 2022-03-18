import styled, { css } from 'styled-components';

interface PropsType {
  isAvailable: boolean;
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
`;

export const Avatar = styled.img`
  width: 11.7rem;
  height: 11.7rem;
  border-radius: 50%;
  grid-area: Avatar;
  margin-right: 1.7rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: ContentHeader;
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
`;

export const ContentText = styled.p`
  color: ${({ theme }) => theme.bodySecondary};
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
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
`;

export const ContactWrapper = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

export const Conctact = styled.div<PropsType>`
  display: flex;
  gap: 1.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.bodyPrimary};

  p {
    font-size: var(--font-size-body);
  }

  svg {
    width: 2rem;
    path {
      fill: ${({ theme }) => theme.bodyPrimary};
    }
  }

  a {
    color: inherit;
  }

  ${({ isAvailable }) =>
    isAvailable &&
    css`
      opacity: 0.5;
    `}
`;
