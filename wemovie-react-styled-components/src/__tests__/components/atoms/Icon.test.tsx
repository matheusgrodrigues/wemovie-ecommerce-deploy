import Icon from '../../../components/atoms/Icon';
import { render, screen } from '../../../utils/test-utils';

it('Deve renderizar o Icon', () => {
    render(<Icon data-testid="icon" config={{ color: 'white', icon: 'shopping-bag', size: 24 }} />);

    const icon = screen.getByTestId('icon');

    expect(icon).toBeInTheDocument();
});
