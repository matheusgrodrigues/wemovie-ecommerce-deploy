import { render, screen } from '@testing-library/react';
import Heading from '../../../components/atoms/Heading';

it('Deve renderizar o component heading', () => {
    render(
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
    );

    const heading = screen.getByTestId('header-heading');
    expect(heading).toBeInTheDocument();
});
