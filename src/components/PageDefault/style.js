import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  color: var(--white);

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media(max-width: 800px) {
    padding-top: 40px
  }
`;
