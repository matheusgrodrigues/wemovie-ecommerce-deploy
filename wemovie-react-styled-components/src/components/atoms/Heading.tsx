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
            {config.variant === 'h1' && <Heading1 data-testid={props['data-testid']}>{children}</Heading1>}
            {config.variant === 'h2' && <Heading2 data-testid={props['data-testid']}>{children}</Heading2>}
        </>
    );
}

const Heading1 = styled.h1``;
const Heading2 = styled.h2``;
