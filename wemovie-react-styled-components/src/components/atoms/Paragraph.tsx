import styled from 'styled-components';

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

export default function Paragraph({ children, config, ...props }: ParagraphProps) {
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
