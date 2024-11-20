import { MovieResponse } from "../schemas/MovieSchema";

const MovieService = {
   getMovies: async (): Promise<MovieResponse> => {
      try {
         const res = await fetch(`${process.env.REACT_APP_PUBLIC_DOMAIN}/data/movies.json`, {
            headers: {
               "Content-Type": "application/json",
            },
         });

         if (!res.ok) throw new Error(`Erro ao buscar os filmes: ${res.status}`);

         return res.json();
      } catch (error) {
         throw new Error("Erro ao buscar os filmes");
      }
   },
};

export default MovieService;
