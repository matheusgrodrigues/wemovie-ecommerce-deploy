import App from "../App";
import { render, screen } from "../utils/test-utils";

describe("Deve renderizar a Home corretamente", () => {
   const setupRender = () => render(<App />);

   describe("Deve renderizar a seção MovieList, corretamente", () => {
      it("Deve renderizar a seção MovieList", () => {
         setupRender();

         const movieList = screen.getByTestId("card-movie-list");

         expect(movieList).toBeInTheDocument();
      });

      it("Deve renderizar pelo menos 1 Movie", () => {
         setupRender();

         const card = screen.getAllByTestId("card-movie-list-item");

         expect(card).not.toHaveLength(0);
      });
   });
});
