import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';

interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export default function Header({ ...props }: HeaderProps) {
    return (
        <HeaderStyled {...props}>
            <Heading
                data-testid="header-heading"
                config={{
                    variant: 'h1',
                    fontWeight: 'font-bold',
                    fontSize: 'text-20',
                    color: 'text-white',
                }}
            >
                <a href="/" data-testid="header-link">
                    WeMovies
                </a>
            </Heading>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.5rem;
    width: 100%;
    background: black;
`;
