import { render, screen } from '../../../utils/test-utils';
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

    describe('Deve renderizar o RightSideCorretamente', () => {
        it('Deve renderizar o RightSide', () => {
            setupHeader();

            const rightSide = screen.getByTestId('header-right-side');
            expect(rightSide).toBeInTheDocument();
        });

        it('Deve renderizar o titulo "Meu Carrinho"', () => {
            setupHeader();

            const titulo = screen.getByTestId('header-right-side-item-heading');

            expect(titulo).toBeInTheDocument();
            expect(titulo).toHaveTextContent('Meu Carrinho');
        });
    });
});
