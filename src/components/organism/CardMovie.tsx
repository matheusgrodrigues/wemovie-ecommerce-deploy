import styled from "styled-components";

import Paragraph from "../atoms/Paragraph";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

import { formatToBRL } from "../../utils/format";
import { MovieSchema } from "../../schema/MovieSchema";

interface CardMovieProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   movie: MovieSchema;
}

export default function CardMovie({ movie, ...props }: CardMovieProps) {
   return (
      <CardMovieStyled {...props}>
         <CardMovieImage data-testid="card-movie-image" src={movie.image} alt={movie.title} />

         <Heading
            data-testid="card-movie-title"
            config={{ variant: "h2", fontWeight: "bold", fontSize: "12", color: "dark2" }}
         >
            {movie.title}
         </Heading>

         <Paragraph
            data-testid="card-movie-price"
            config={{
               fontWeight: "bold",
               fontSize: "16",
               color: "dark1",
            }}
         >
            {formatToBRL(movie.price)}
         </Paragraph>

         <Button
            data-testid="card-movie-button"
            onClick={() => null}
            config={{
               variant: `${1 > 0 ? "success" : "primary"}`,
            }}
         >
            <CardMovieButtonIconContainer>
               <Icon
                  data-testid="card-movie-button-icon"
                  config={{ color: "white", icon: "shopping-cart", size: 13 }}
               />
               <CardMovieButtonIconQuantity data-testid="card-movie-button-quantity">{0}</CardMovieButtonIconQuantity>
            </CardMovieButtonIconContainer>

            <Paragraph
               data-testid="card-movie-button-label"
               config={{
                  fontWeight: "bold",
                  fontSize: "12",
                  color: "white",
               }}
               style={{
                  textTransform: "uppercase",
               }}
            >
               Adicionar ao carrinho
            </Paragraph>
         </Button>
      </CardMovieStyled>
   );
}

const CardMovieStyled = styled.div`
   background: ${({ theme }) => theme.ref.colors["white"]};
   width: 100%;
   max-width: 21.125rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: ${({ theme }) => theme.ref.spacing["8"]};
   padding: ${({ theme }) => theme.ref.spacing["16"]};
   border-radius: 0.25rem;
`;

const CardMovieImage = styled.img`
   width: 9.187rem;
   height: 11.75rem;
`;

const CardMovieButtonIconContainer = styled.div`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.ref.spacing["4"]};
   margin-right: ${({ theme }) => theme.ref.spacing["12"]};
`;

const CardMovieButtonIconQuantity = styled.span`
   color: ${({ theme }) => theme.ref.colors["white"]};
   font-size: ${({ theme }) => theme.ref.fontSize["12"]};
   font-weight: ${({ theme }) => theme.ref.fontWeight["regular"]};
`;
