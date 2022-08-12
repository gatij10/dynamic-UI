import styled from 'styled-components';

export const Hc1CardContainer = styled.div`
    width: 100%;
    min-width: 100%,
    height: 70px;
    border-radius: 12px;
    background-color: ${({ backgroundColor }) => (backgroundColor || '#FBAF03')};
`;

export const Image = styled.img`
    padding-left: 10px;
    height: 30px;
    width: 30px;
`;

export const Hc1ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: cenetr;
`;

export const Heading = styled.p`
    padding: 0px 0px 0px 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`;

export const Description = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: rgba(27, 27, 30, 0.725524);
`;
