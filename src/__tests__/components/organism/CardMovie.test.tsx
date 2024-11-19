import CardMovie from "../../../components/organism/CardMovie";
import { render, screen } from "../../../utils/test-utils";

describe("Deve renderizar o CardMovie corretamente", () => {
   it("Deve renderizar a imagem", () => {
      render(<CardMovie />);

      const image = screen.getByTestId("card-movie-image");

      expect(image).toBeInTheDocument();
   });
});
