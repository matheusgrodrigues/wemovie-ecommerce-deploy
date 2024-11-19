import styled from 'styled-components';
import Header from '../organism/Header';

interface BaseLayoutProps {
    children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <BaseLayoutContainer>
            <Header data-testid="header" />
            {children}
        </BaseLayoutContainer>
    );
}

const BaseLayoutContainer = styled.main`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.ref.colors['dark1']};

    ${({ theme }) => theme.utils.container()}
`;
