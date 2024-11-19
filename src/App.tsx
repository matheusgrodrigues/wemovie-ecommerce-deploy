import { useEffect, useState } from "react";
import styled from "styled-components";
import BaseLayout from "./components/base/BaseLayout";
import CardMovie from "./components/organism/CardMovie";
import EmptyState from "./components/organism/EmptyState/EmptyState";
import ErrorState from "./components/organism/ErrorState/ErrorState";

import { MovieResponse, MovieSchema } from "./schema/MovieSchema";

function App() {
   const [movies, setMovies] = useState<MovieSchema[]>([]);
   const [error, setError] = useState(false);

   useEffect(() => {
      const movies = async () => {
         try {
            const res = await fetch(`${process.env.REACT_APP_PUBLIC_DOMAIN}/data/movies.json`, {
               headers: {
                  "Content-Type": "application/json",
               },
            });

            if (!res.ok) {
               setError(true);
               throw new Error(`Erro ao buscar os filmes: ${res.status}`);
            }

            const movies = (await res.json()) as MovieResponse;
            setError(false);

            setMovies(movies.products);
         } catch (error) {
            setError(true);
            throw new Error("Erro ao buscar os filmes");
         }
      };

      movies();
   }, []);

   return (
      <BaseLayout>
         <MovieList data-testid="card-movie-list">
            {error ? (
               <ErrorState />
            ) : movies.length > 0 ? (
               movies.map((movie) => <CardMovie key={movie.id} data-testid="card-movie-list-item" movie={movie} />)
            ) : (
               <EmptyState />
            )}
         </MovieList>
      </BaseLayout>
   );
}

const MovieList = styled.div`
   display: flex;
   justify-content: center;
   ${({ theme }) => theme.utils.screen("xl", "justify-content: flex-start;")};

   flex-wrap: wrap;
   gap: ${({ theme }) => theme.ref.spacing["16"]};

   margin-bottom: ${({ theme }) => theme.ref.spacing["16"]};
   ${({ theme }) => theme.utils.screen("lg", "margin-bottom: 0;")};
`;

export default App;
