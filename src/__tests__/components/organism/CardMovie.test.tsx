import CardMovie from "../../../components/organism/CardMovie";
import { render, screen } from "../../../utils/test-utils";

describe("Deve renderizar o CardMovie corretamente", () => {
   const setupRender = () => render(<CardMovie />);

   it("Deve renderizar a imagem", () => {
      setupRender();

      const image = screen.getByTestId("card-movie-image");

      expect(image).toBeInTheDocument();
   });

   it("Deve renderizar o title", () => {
      setupRender();

      const title = screen.getByTestId("card-movie-title");

      expect(title).toBeInTheDocument();
   });

   it("Deve renderizar o price", () => {
      setupRender();

      const price = screen.getByTestId("card-movie-price");

      expect(price).toBeInTheDocument();
   });

   describe("Deve renderizar o Button corretamente", () => {
      it("Deve renderizar o Button", () => {
         setupRender();

         const button = screen.getByTestId("card-movie-button");

         expect(button).toBeInTheDocument();
      });

      it("Deve renderizar o Icon", () => {
         setupRender();

         const icon = screen.getByTestId("card-movie-button-icon");

         expect(icon).toBeInTheDocument();
      });

      it("Deve renderizar a quantidade", () => {
         setupRender();

         const quantity = screen.getByTestId("card-movie-button-quantity");

         expect(quantity).toBeInTheDocument();
      });

      it("Dever renderizar o label text", () => {
         setupRender();

         const label = screen.getByTestId("card-movie-button-label");

         expect(label).toBeInTheDocument();
      });
   });
});
