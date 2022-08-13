import styled from 'styled-components';

export const HomepageContainer = styled.div`
    margin: 4%;
`;

export const StatusLabel = styled.p`
    display: flex;
    justify-content: center;
    margin: 5%;
    color: ${({ color }) => (color || '#000')};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
`;
