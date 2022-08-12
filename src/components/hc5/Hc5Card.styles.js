import styled from 'styled-components';

export const Hc5CardContainer = styled.div`
    display: flex;
    min-width: 100%;
    height: fit-content;
    flex-direction: row;
    padding: 10px;
    background-color: ${({ backgroundColor }) => (backgroundColor || 'white')};

  .background-image {
    object-fit: contain;
    width: 100%;
    border-radius: 10px;
  }
`;
