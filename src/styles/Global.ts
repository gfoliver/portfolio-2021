import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        background: ${props => props.theme.colors.background};
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.white};

        input, button {
            font-family: 'Roboto', sans-serif;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
    }

    h2 {
        font-size: 64px;
        margin-bottom: 48px;
    }
    
    h3 {
        font-size: 48px;
        margin-bottom: 32px;
    }
    
    h4 {
        font-size: 32px;
        margin-bottom: 0;
    }

    @media only screen and (max-width: 768px) {
        h2 {
            font-size: 48px;
        }

        h3 {
            font-size: 32px;
        }

        h4 {
            font-size: 24px;
        }
    }

    .container {
        max-width: 1220px;
        width: 100%;
        padding: 0 16px;
        margin: 0 auto;

        @media only screen and (max-width: 1220px) {
            width: 100%;
            max-width: 100vw;
        }
    }
`;