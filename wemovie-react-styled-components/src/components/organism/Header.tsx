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

                <p>icone</p>
            </HeaderRightSide>
        </HeaderStyled>
    );
}

type ParagraphConfig = {
    fontWeight: 'semibold';
    fontSize: '12';
    color: 'gray';
};

interface ParagraphProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    config: ParagraphConfig;
}

function Paragraph({ children, config, ...props }: ParagraphProps) {
    return (
        <ParagraphStyled $config={config} {...props}>
            {children}
        </ParagraphStyled>
    );
}

interface ParagraphStyledProps {
    $config: ParagraphConfig;
}

const ParagraphStyled = styled.p<ParagraphStyledProps>`
    font-weight: ${({ theme, $config }) => theme.ref.fontWeight[$config.fontWeight]};
    font-size: ${({ theme, $config }) => theme.ref.fontSize[$config.fontSize]};
    color: ${({ theme, $config }) => theme.ref.colors[$config.color]};
`;

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
