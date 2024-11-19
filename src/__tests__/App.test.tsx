import App from "../App";
import { render, screen } from "../utils/test-utils";

/* TODO: corrigir dados mockados

const mockMovies: MovieSchema[] = [
   {
      id: 1,
      title: "Viúva Negra",
      price: 9.99,
      image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png",
   },
   {
      id: 2,
      title: "Shang-chi",
      price: 30.99,
      image: "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png",
   },
];

global.fetch = jest.fn(() =>
   Promise.resolve({
      ok: true,
      json: () =>
         Promise.resolve({
            products: mockMovies,
         }),
   })
) as jest.Mock; */

describe("Deve renderizar a Home corretamente", () => {
   const setupRender = () => render(<App />);

   describe("Deve renderizar a seção MovieList, corretamente", () => {
      it("Deve renderizar a seção MovieList", () => {
         setupRender();

         const movieList = screen.getByTestId("card-movie-list");

         expect(movieList).toBeInTheDocument();
      });

      /* TODO: corrigir este teste para funcionar com dados mockados corretamente.

      it("Deve renderizar pelo menos 1 Movie", async () => {
         await setupRender();

         await waitFor(() => {
            const items = screen.getAllByTestId("card-movie-list-item");
            expect(items.length).toBe(mockMovies.length);
         });
   }); */
   });
});
