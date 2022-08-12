import styled from 'styled-components';

export const Hc3CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border-radius: 12px;
`;

export const Hc3CardContentContainer = styled.div`
    height: 200px;
    padding: 30px;
    min-width: 100%;
    flex-direction: column;
    color: #fff;
    background-color: ${({ backgroundColor }) => (backgroundColor || '#454AA6')};
    background-image: ${({ backgroundImage }) => (`url(${backgroundImage})` || 'none')};
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 12px;
    justify-content: flex-end;
    padding-top: 150px;

    .heading: {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        word-wrap: break-word;
        white-space: pre-wrap;
    }

    .sub-heading: {
        font-style: normal;
        font-weight: 200;
        font-size: 12px;
        line-height: 18px;
        word-wrap: break-word;
        white-space: pre-wrap;
    }

    .cta {
        background-color: ${({ cta }) => (cta ? cta[0].bg_color : '#000')};
        border-radius: 6px;
        width: 125px;
        color: ${({ cta }) => (cta ? cta[0].text_color : '#fff')};
        padding: 10px;
      }
`;
