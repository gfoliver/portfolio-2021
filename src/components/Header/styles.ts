import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.backgroundLight};
    width: 100%;
    padding: 32px 0;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Social = styled.nav`
    display: flex;
    list-style: none;
    align-items: center;

    li {
        & + li {
            margin-left: 32px;
        }

        a { 
            text-decoration: none;

            svg {
                width: 40px;
                height: 40px;
            }
        }
    }

    @media only screen and (max-width: 580px) {
        display: none;
    }
`;