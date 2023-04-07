import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 80px 0;
    background: ${props => props.theme.colors.backgroundDark};

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;

        @media only screen and (max-width: 1100px) {
            display: flex;
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 768px) {
        padding-bottom: 0;
    }
`;

export const Card = styled.div`
    border-radius: 20px;
    background: ${props => props.theme.colors.backgroundLight};
    padding: 48px 32px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        max-width: 100%;
        display: block;
        border: 2px solid ${props => props.theme.colors.backgroundDark};
        border-radius: 100%;
        margin-bottom: 32px;
    }

    p {
        text-align: center;
        font-size: 20px;
        line-height: 1.5em;
        margin: 0 32px;
    }

    @media only screen and (max-width: 768px) {
        padding: 32px 24px 48px;

        p {
            margin: 0;
            font-size: 16px;
        }
    }
`;

export const ContactBlock = styled.a`
    padding: 32px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    background: rgba(255,255,255,0.05);
    width: 100%;
    margin-bottom: 16px;
    border: 2px solid transparent;
    transition: all .3s ease;

    &:hover {
        border-color: ${props => props.theme.colors.accents[2]};
    }

    &:last-child {
        margin-bottom: 0;
    }

    svg {
        width: 32px;
        height: 32px;
        margin-right: 24px;
    }

    span {
        display: block;
        font-size: 24px;
        color: ${props => props.theme.colors.accents[0]};

        span {
            display: inline;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 16px;
        border-radius: 10px;

        span {
            font-size: 16px;

            span {
                display: none;
            }
        }
    }
`;