import styled from 'styled-components';

export const Hc9CardContainer = styled.div`
  display: inline-block;
  width: fit-content;
  border-radius: 11px;
  vertical-align:middle;
  .background-image {
    object-fit: contain;
    height: ${({ height }) => (height ? `${height}px` : '195px')};
  }
`;
