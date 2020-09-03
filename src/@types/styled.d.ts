import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string,
            backgroundLight: string,
            backgroundDark: string,
            white: string,
            blue: string,
            gradient: string,
        }
    }
}