import styled, { css } from 'styled-components';

interface TechProps {
    active: boolean;
}

export const Container = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.backgroundDark};
    padding: 80px 0;

    h2 {
        text-align: center;
    }
`;

export const GridHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    background: ${props => props.theme.colors.backgroundLight};
    border-radius: 20px;
    padding: 0 40px;

    h4 {
        padding: 32px 0;
    }

    @media only screen and (max-width: 580px) {
        display: block;

        h4 {
            padding-bottom: 0;
            text-align: center;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;

    @media only screen and (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 580px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    border-radius: 20px;
    background: ${props => props.theme.colors.backgroundLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    box-shadow: inset 0px -16px 0px rgba(0,0,0,0.12);
    text-align: center;
    padding: 32px;

    .title {
        font-size: 24px;
        margin-bottom: 8px;
    }

    .techs {
        color: rgba(255,255,255,0.5);
        font-size: 12px;
    }
`;

export const Techs = styled.nav`
    display: flex;
    align-items: center;
    list-style: none;

    @media only screen and (max-width: 580px) {
        justify-content: center;
    }

    @media only screen and (max-width: 400px) {
        display: block;
        padding-bottom: 32px;
    }
`;

export const Tech = styled.li<TechProps>`
    font-size: 24px;
    padding: 32px 0;
    color: ${props => props.theme.colors.white};
    border-bottom: solid 4px transparent;
    margin-right: 48px;
    transition: all .3s ease;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    ${props => props.active && css`
        border-color: ${props.theme.colors.blue};
    `};

    @media only screen and (max-width: 580px) {
        font-size: 16px;
        margin-right: 32px;
    }

    @media only screen and (max-width: 400px) {
        margin-right: 0;
        padding: 0;
        margin-bottom: 24px;
        text-align: center;

        &:first-child {
            margin-top: 24px;
        }
        
        &:last-child {
            margin-bottom: 0;
        }
       
        ${props => props.active && css`
            border-color: transparent;
            color: ${props => props.theme.colors.blue};
            font-weight: bold;
        `};
    }
`;