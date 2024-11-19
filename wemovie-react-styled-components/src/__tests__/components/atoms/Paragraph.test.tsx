import Paragraph from '../../../components/atoms/Paragraph';
import { render, screen } from '../../../utils/test-utils';

it('Deve renderizar o Paragraph', () => {
    render(
        <Paragraph
            data-testid="paragraph"
            config={{
                fontWeight: 'semibold',
                fontSize: '12',
                color: 'gray',
            }}
        >
            <></>
        </Paragraph>
    );

    const p = screen.getByTestId('paragraph');
    expect(p).toBeInTheDocument();
});
