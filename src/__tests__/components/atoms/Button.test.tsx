import Button from "../../../components/atoms/Button";
import { render, screen } from "../../../utils/test-utils";

it("Deve renderizar o Button", () => {
   render(
      <Button
         data-testid="button"
         config={{
            variant: "primary",
         }}
      >
         <></>
      </Button>
   );

   const button = screen.getByTestId("button");

   expect(button).toBeInTheDocument();
});
