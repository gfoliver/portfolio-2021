import styled from 'styled-components';

export const Container = styled.div`
    background-size: cover;
    background-position: bottom right;
    width: 100%;
    min-height: calc(100vh - 108px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .background {
        position: absolute;
        z-index: -1;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    h1 {
        font-size: 80px;
        margin-bottom: 16px;
    }

    .subtitle {
        font-size: 32px;
        margin-bottom: 48px;
    }

    @media only screen and (max-width: 1100px) {
        img {
            display: none;
        }

        .container {
            justify-content: center;
            text-align: center;
        }
    }

    @media only screen and (max-width: 768px) {
        h1 {
            font-size: 64px;
        }

        .subtitle {
            font-size: 24px;
        }
    }

    @media only screen and (max-width: 580px) {
        min-height: 0;
        padding-top: 80px;
        padding-bottom: 80px;

        h1 {
            font-size: 48px;
        }

        .subtitle {
            font-size: 16px;
            margin-bottom: 32px;
        }
    }
`;

export const CTA = styled.a`
    text-decoration: none;
    display: block;
    padding: 24px 96px;
    border-radius: 16px;
    background: ${props => props.theme.colors.accents[2]};
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    font-size: 32px;
    box-shadow: 6px 6px 12px rgba(0,0,0,0.12);
    width: fit-content;
    transition: all .3s ease;

    @media only screen and (max-width: 1100px) {
        margin: 0 auto;
    }
    
    @media only screen and (max-width: 580px) {
        font-size: 24px;
        padding: 16px 80px;
    }
`;