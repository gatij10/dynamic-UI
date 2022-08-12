import styled from 'styled-components';

export const CardGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  width: 100%;
  overflow-x: ${({ isScrollable }) => (isScrollable ? 'auto' : 'hidden')};
  white-space: ${({ isScrollable }) => (isScrollable ? 'normal' : 'nowrap')};
  margin-bottom: 1rem;
  justify-content: space-between;
`;
