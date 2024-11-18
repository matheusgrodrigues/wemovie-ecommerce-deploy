import { DefaultTheme } from 'styled-components';

const ref = {
    fontSize: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '64': '5.5rem',
    },

    fontWeight: {
        'font-bold': '700',
        'semi-bold': '600',
        regular: '400',
    },

    colors: {
        white: '#ffffff',
        dark2: '#333333',
        dark1: '#2F2E41',
        blue2: '#009EDD',
        blue1: '#0073A1',
        green: '#039B00',
        gray: '#999999',
    },

    padding: {
        '8': '0.5rem',
        '16': '1rem',
        '24': '1.5rem',
        '64': '4rem',
    },

    breakpoint: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
    },

    spacing: {
        '4': '0.25rem',
        '8': '0.5rem',
        '10': '0.625rem',
        '12': '0.75rem',
        '16': '1rem',
        '21': '1.312rem',
        '24': '1.5rem',
        '32': '2rem',
        '64': '4rem',
    },

    borderWidth: {
        'bw-1': '1px',
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
