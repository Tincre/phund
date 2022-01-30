import { render } from "@testing-library/react";
import NavigationHero from "../../../components/Sections/NavigationHero";

describe("NavigationHero", () => {
  it("should render the component", () => {
    render(<NavigationHero />);
  });
});
