import { render } from "@testing-library/react";
import FactCards from "../../../components/Sections/FactCards";

describe("FactCards", () => {
  it("should render the component", () => {
    render(<FactCards />);
  });
});
