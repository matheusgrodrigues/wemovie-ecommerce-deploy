import styled from "styled-components";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import ErrorStateImage from "./empty-state.svg";

export default function ErrorState() {
   return (
      <ErrorStateStyled>
         <ErrorStateSContainertyled>
            <Heading
               data-testid="Error-state-title"
               config={{
                  variant: "h2",
                  fontWeight: "bold",
                  fontSize: "20",
                  color: "dark1",
               }}
            >
               Ops! ocorreu um erro {":("}
            </Heading>

            {/*
             *
             * TODO: corrigir responsividade desta imagem
             * TODO: adicionar uma imagem que represente um erro, não encontrei um svg legal, após resolver, remover comentário.
             *
             */}
            <img
               data-testid="Error-state-image"
               style={{ objectFit: "cover" }}
               src={ErrorStateImage}
               alt="Parece que não há nada por aqui :("
            />

            <Button
               data-testid="Error-state-button"
               config={{
                  variant: "primary",
                  size: "md",
               }}
            >
               <Paragraph
                  config={{
                     fontWeight: "bold",
                     fontSize: "12",
                     color: "white",
                  }}
               >
                  Recarregar página
               </Paragraph>
            </Button>
         </ErrorStateSContainertyled>
      </ErrorStateStyled>
   );
}

const ErrorStateStyled = styled.div`
   background: ${({ theme }) => theme.ref.colors["white"]};
   padding: ${({ theme }) => theme.ref.padding["64"]};
   width: 100%;
`;

const ErrorStateSContainertyled = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: ${({ theme }) => theme.ref.spacing["24"]};
   max-width: 12.5rem;

   ${({ theme }) => theme.utils.screen("md", "max-width: 27.93rem")};
   ${({ theme }) => theme.utils.container()};
`;
