import styled from "styled-components";

type HeadingConfig = {
   variant: "h1" | "h2";
   fontWeight: "bold" | "semibold";
   fontSize: "20" | "14" | "12";
   color: "white" | "dark1" | "dark2" | "gray";
};

interface HeadingProps
   extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "style"> {
   children: React.ReactNode;
   config: HeadingConfig;
   "data-testid"?: string;
}

export default function Heading({ children, config, ...props }: HeadingProps) {
   const { variant } = config;
   return (
      <>
         {variant === "h1" && (
            <Heading1 $config={config} {...props}>
               {children}
            </Heading1>
         )}
         {variant === "h2" && (
            <Heading2 $config={config} {...props}>
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
