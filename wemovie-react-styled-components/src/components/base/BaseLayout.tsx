import Header from '../organism/Header';

interface BaseLayoutProps {
    children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <>
            <Header data-testid="header" />
            {children}
        </>
    );
}
