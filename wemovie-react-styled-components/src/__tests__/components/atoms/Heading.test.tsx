import { render, screen } from '@testing-library/react';
import Heading from '../../../components/atoms/Heading';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../config/theme';

it('Deve renderizar o component heading', () => {
    render(
        <ThemeProvider theme={defaultTheme}>
            <Heading
                data-testid="header-heading"
                config={{
                    variant: 'h1',
                    fontWeight: 'font-bold',
                    fontSize: 'text-20',
                    color: 'text-white',
                }}
            >
                Heading
            </Heading>
        </ThemeProvider>
    );

    const heading = screen.getByTestId('header-heading');
    expect(heading).toBeInTheDocument();
});
