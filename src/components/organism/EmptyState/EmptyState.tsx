import styled from "styled-components";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import emptyState from "./empty-state.svg";

export default function EmptyState() {
   return (
      <EmptyStateStyled>
         <EmptyStateSContainertyled>
            <Heading
               data-testid="empty-state-title"
               config={{
                  variant: "h2",
                  fontWeight: "bold",
                  fontSize: "20",
                  color: "dark1",
               }}
            >
               Parece que não há nada por aqui {":("}
            </Heading>

            {/* TODO: corrigir responsividade desta imagem */}
            <img
               data-testid="empty-state-image"
               style={{ objectFit: "cover" }}
               src={emptyState}
               alt="Parece que não há nada por aqui :("
            />

            <Button
               data-testid="empty-state-button"
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
         </EmptyStateSContainertyled>
      </EmptyStateStyled>
   );
}

const EmptyStateStyled = styled.div`
   background: ${({ theme }) => theme.ref.colors["white"]};
   padding: ${({ theme }) => theme.ref.padding["64"]};
   width: 100%;
`;

const EmptyStateSContainertyled = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: ${({ theme }) => theme.ref.spacing["24"]};
   max-width: 12.5rem;

   ${({ theme }) => theme.utils.screen("md", "max-width: 27.93rem")};
   ${({ theme }) => theme.utils.container()};
`;
