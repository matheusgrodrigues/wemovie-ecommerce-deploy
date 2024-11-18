import styled from 'styled-components';

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

interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

function Header({ ...props }: HeaderProps) {
    return <HeaderStyled {...props}></HeaderStyled>;
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.5rem;
    width: 100%;
    background: black;
`;
