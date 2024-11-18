import { render, screen } from '@testing-library/react';

import BaseLayout from '../../../components/BaseLayout/BaseLayout';

describe('Deve renderizar o BaseLayout corretamente', () => {
    const setupRender = () =>
        render(
            <BaseLayout>
                <></>
            </BaseLayout>
        );

    it('Deve renderizar o header', () => {
        setupRender();
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });
});
