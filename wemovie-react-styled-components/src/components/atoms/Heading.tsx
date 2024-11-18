import styled from 'styled-components';

type HeadingConfig = {
    variant: 'h1' | 'h2';
    fontWeight: 'font-bold';
    fontSize: '20';
    color: 'white';
};

interface HeadingProps
    extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, 'style'> {
    children: React.ReactNode;
    config: HeadingConfig;
    'data-testid'?: string;
}

export default function Heading({ children, config, ...props }: HeadingProps) {
    const { variant } = config;
    return (
        <>
            {variant === 'h1' && (
                <Heading1 $config={config} data-testid={props['data-testid']} {...props}>
                    {children}
                </Heading1>
            )}
            {variant === 'h2' && (
                <Heading2 $config={config} data-testid={props['data-testid']} {...props}>
                    {children}
                </Heading2>
            )}
        </>
    );
}

interface HeadingStyledProps {
    $config: HeadingConfig;
}

const Heading1 = styled.h1<HeadingStyledProps>`
    font-size: ${({ $config, theme }) => theme.ref.fontSize[$config.fontSize]};
    font-weight: ${({ $config, theme }) => theme.ref.fontWeight[$config.fontWeight]};
    color: ${({ $config, theme }) => theme.ref.colors[$config.color]};
`;

const Heading2 = styled.h2<HeadingStyledProps>`
    font-size: ${({ $config, theme }) => theme.ref.fontSize[$config.fontSize]};
    font-weight: ${({ $config, theme }) => theme.ref.fontWeight[$config.fontWeight]};
    color: ${({ $config, theme }) => theme.ref.colors[$config.color]};
`;
