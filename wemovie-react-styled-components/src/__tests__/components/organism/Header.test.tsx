import { render, screen } from '@testing-library/react';
import Header from '../../../components/organism/Header';

describe('Deve renderizar o Header corretamente', () => {
    const setupHeader = () => render(<Header />);

    it('Deve renderizar o nome do APP', () => {
        setupHeader();

        const heading = screen.getByTestId('header-heading');
        const link = screen.getByTestId('header-link');

        expect(heading).toBeInTheDocument();
        expect(link).toBeInTheDocument();
    });

    it('O link deve ter a url configurada corretamente', () => {
        setupHeader();

        const link = screen.getByTestId('header-link');

        expect(link).toBeInTheDocument();
        expect(link).toHaveProperty('href', 'http://localhost/');
    });
});
