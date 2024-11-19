import EmptyState from "../../../components/organism/EmptyState/EmptyState";
import { render, screen } from "../../../utils/test-utils";

describe("Deve renderizar o EmptyState corretamente", () => {
   const setupRender = () => render(<EmptyState />);

   it("Deve renderizar o titulo", () => {
      setupRender();

      const titulo = screen.getByTestId("empty-state-title");

      expect(titulo).toBeInTheDocument();
   });
   it("Deve renderizar a imagem", () => {
      setupRender();

      const image = screen.getByTestId("empty-state-image");

      expect(image).toBeInTheDocument();
   });
   it("Deve renderizar o botão", () => {
      setupRender();

      const button = screen.getByTestId("empty-state-button");

      expect(button).toBeInTheDocument();
   });
});
