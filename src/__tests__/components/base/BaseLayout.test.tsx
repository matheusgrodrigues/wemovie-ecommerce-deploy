import { render, screen } from '@testing-library/react';
import BaseLayout from '../../../components/base/BaseLayout';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../config/theme';

describe('Deve renderizar o BaseLayout corretamente', () => {
    const setupRender = () =>
        render(
            <ThemeProvider theme={defaultTheme}>
                <BaseLayout>
                    <></>
                </BaseLayout>
            </ThemeProvider>
        );

    it('Deve renderizar o header', () => {
        setupRender();
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });
});
