import ErrorState from "../../../components/organism/ErrorState/ErrorState";
import { render, screen } from "../../../utils/test-utils";

describe("Deve renderizar o ErrorState corretamente", () => {
   const setupRender = () => render(<ErrorState />);

   it("Deve renderizar o titulo", () => {
      setupRender();

      const titulo = screen.getByTestId("Error-state-title");

      expect(titulo).toBeInTheDocument();
   });
   it("Deve renderizar a imagem", () => {
      setupRender();

      const image = screen.getByTestId("Error-state-image");

      expect(image).toBeInTheDocument();
   });
   it("Deve renderizar o botão", () => {
      setupRender();

      const button = screen.getByTestId("Error-state-button");

      expect(button).toBeInTheDocument();
   });
});
