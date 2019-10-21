import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto 67px;
`;

export const InnerWrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    padding-top: 8px;
`;

export const Title = styled.h3`
    line-height: 70px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: normal;
`;

export const FotterButton = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    padding: 0 22px;
`;

export const ButtonIcon = styled.button`
    font-size: 18px;
    border: none;
    cursor: pointer;
`;