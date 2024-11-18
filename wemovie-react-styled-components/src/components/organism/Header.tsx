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
                    fontSize: '20',
                    color: 'white',
                }}
            >
                <a href="/" data-testid="header-link">
                    WeMovies
                </a>
            </Heading>

            <HeaderRightSide data-testid="header-right-side">
                <HeaderRightSideItem>
                    <HeaderRightSideItemHeading
                        data-testid="header-right-side-item-heading"
                        config={{
                            variant: 'h2',
                            fontWeight: 'font-bold',
                            fontSize: '20',
                            color: 'white',
                        }}
                    >
                        Meu Carrinho
                    </HeaderRightSideItemHeading>

                    <p>itens</p>
                </HeaderRightSideItem>

                <p>icone</p>
            </HeaderRightSide>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.5rem;
    width: 100%;
    background: ${({ theme }) => theme.ref.colors['dark1']};
`;

const HeaderRightSide = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.ref.spacing['16']};
    cursor: pointer;
`;

const HeaderRightSideItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const HeaderRightSideItemHeading = styled(Heading)`
    display: none;
    ${({ theme }) => theme.utils.screen('md', 'display: flex;')}
`;
