import React from "react";
import styled from "styled-components";

interface ButtonProps
   extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className"> {
   children: React.ReactNode;
   config: {
      variant: "primary" | "success";
      size?: "md";
   };
}

export default function Button({ children, config, ...props }: ButtonProps) {
   const { variant, size } = config;

   return (
      <ButtonStyled $variant={variant} $width={size === "md" ? "10.812rem" : "100%"} {...props}>
         {children}
      </ButtonStyled>
   );
}

interface ButtonStyledProps {
   $width: string;
   $variant: "primary" | "success";
}

const ButtonStyled = styled.button<ButtonStyledProps>`
   width: ${({ $width }) => $width};
   height: 2.5rem;
   max-width: 19.125rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 4px;
   padding: ${({ theme }) => theme.ref.spacing["8"]};

   background: ${({ $variant, theme }) =>
      $variant === "primary" ? theme.ref.colors["blue2"] : theme.ref.colors["green"]};

   &:hover {
      background: ${({ $variant, theme }) =>
         $variant === "primary" ? theme.ref.colors["blue1"] : theme.ref.colors["dark2"]};
      cursor: pointer;
   }

   ${({ theme }) => theme.utils.applyHoverTransition()};
`;
