import styled from 'styled-components';

interface HeadingProps {
    children: React.ReactNode;
    config: {
        variant: 'h1' | 'h2';
        fontWeight: 'font-bold';
        fontSize: 'text-20';
        color: 'text-white';
    };
    'data-testid'?: string;
}

export default function Heading({ children, config, ...props }: HeadingProps) {
    return (
        <>
            {config.variant === 'h1' && (
                <Heading1 config={config} data-testid={props['data-testid']}>
                    {children}
                </Heading1>
            )}
            {config.variant === 'h2' && (
                <Heading2 config={config} data-testid={props['data-testid']}>
                    {children}
                </Heading2>
            )}
        </>
    );
}

interface HeadingStyledProps extends HeadingProps {}

const Heading1 = styled.h1<HeadingStyledProps>`
    font-size: ${({ config, theme }) => theme.ref.fontSize[config.fontSize]};
    font-weight: ${({ config, theme }) => theme.ref.fontWeight[config.fontWeight]};
    color: ${({ config, theme }) => theme.ref.colors[config.color]};
`;

const Heading2 = styled.h2<HeadingStyledProps>`
    font-size: ${({ config, theme }) => theme.ref.fontSize[config.fontSize]};
    font-weight: ${({ config, theme }) => theme.ref.fontWeight[config.fontWeight]};
    color: ${({ config, theme }) => theme.ref.colors[config.color]};
`;
