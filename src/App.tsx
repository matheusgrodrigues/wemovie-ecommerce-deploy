import { useEffect, useState } from "react";
import styled from "styled-components";
import BaseLayout from "./components/base/BaseLayout";
import CardMovie from "./components/organism/CardMovie";
import { MovieResponse, MovieSchema } from "./schema/MovieSchema";

const domain = process.env.REACT_APP_PUBLIC_DOMAIN;

function App() {
   const [movies, setMovies] = useState<MovieSchema[]>([]);

   useEffect(() => {
      const movies = async () => {
         try {
            const res = await fetch(`${domain}/data/movies.json`, {
               headers: {
                  "Content-Type": "application/json",
               },
            });

            if (!res.ok) throw new Error(`Erro ao buscar os filmes: ${res.status}`);

            const movies = (await res.json()) as MovieResponse;

            //       setMovies(movies.products);
         } catch (error) {
            throw new Error("Erro ao buscar os filmes");
         }
      };

      movies();
   }, []);

   return (
      <BaseLayout>
         <MovieList data-testid="card-movie-list">
            {movies.map((movie) => (
               <CardMovie key={movie.id} data-testid="card-movie-list-item" movie={movie} />
            ))}
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
