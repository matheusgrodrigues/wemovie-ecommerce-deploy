import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";

import styled from "styled-components";
import CardMovie from "./components/organism/CardMovie";
import EmptyState from "./components/organism/EmptyState/EmptyState";
import ErrorState from "./components/organism/ErrorState/ErrorState";

import { LoaderHomeData } from "./routes";
import { MovieResponse } from "./schemas/MovieSchema";

function App() {
   const { movies } = useLoaderData() as LoaderHomeData;

   return (
      <MovieList data-testid="card-movie-list">
         <Suspense fallback={<>Loading...</>}>
            <Await resolve={movies} errorElement={<ErrorState />}>
               {({ products }: MovieResponse) => {
                  return (
                     <>
                        {products.length > 0 ? (
                           products.map((movie) => (
                              <CardMovie key={movie.id} data-testid="card-movie-list-item" movie={movie} />
                           ))
                        ) : (
                           <EmptyState />
                        )}
                     </>
                  );
               }}
            </Await>
         </Suspense>
      </MovieList>
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
