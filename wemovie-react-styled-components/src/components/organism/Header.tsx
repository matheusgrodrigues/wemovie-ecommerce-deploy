import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/Icon';

interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export default function Header({ ...props }: HeaderProps) {
    return (
        <HeaderStyled {...props}>
            <Heading
                data-testid="header-heading"
                config={{
                    variant: 'h1',
                    fontWeight: 'bold',
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
                            fontWeight: 'bold',
                            fontSize: '20',
                            color: 'white',
                        }}
                    >
                        Meu Carrinho
                    </HeaderRightSideItemHeading>

                    <Paragraph
                        config={{
                            fontWeight: 'semibold',
                            fontSize: '12',
                            color: 'gray',
                        }}
                    >
                        <span data-testid="header-right-side-item-quantity">0</span> itens
                    </Paragraph>
                </HeaderRightSideItem>

                <Icon config={{ color: 'white', icon: 'shopping-bag', size: 24 }} />
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
