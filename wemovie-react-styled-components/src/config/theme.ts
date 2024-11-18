import { DefaultTheme } from 'styled-components';

const ref = {
    fontSize: {
        'text-20': '2rem',
    },

    fontWeight: {
        'font-bold': 'bold',
    },

    colors: {
        'text-white': 'white',
    },

    breakpoint: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
    },

    spacing: {
        '16': '1rem',
        '24': '1.5rem',
    },
};

const utils = {
    screen: (bp: 'sm' | 'md' | 'lg' | 'xl' | '2xl', content: string) => {
        const result =
            bp === 'sm'
                ? `@media screen and (max-width: ${ref.breakpoint[bp]}) {
            ${content}
          }`
                : `@media screen and (min-width: ${ref.breakpoint[bp]}) {
            ${content}
          }`;

        return result;
    },

    container: () => `
        max-width: ${ref.breakpoint['2xl']};
        padding: ${ref.spacing['16']};
        margin: 0 auto;
        width: 100%;

        ${utils.screen('md', `padding: ${ref.spacing['24']}`)};
    `,

    pxToRem: (px: number, base = 16) => `${px / base}rem`,

    applyHoverTransition: () => `
            transition: 0.3s;
            
            &:hover {
                transition: 0.3s;
                opacity: 0.8;
            }
        `,
};

declare module 'styled-components' {
    export interface DefaultTheme {
        utils: typeof utils;
        name: 'default';
        ref: typeof ref;
    }
}

export const defaultTheme: DefaultTheme = {
    utils,
    name: 'default',
    ref,
};
