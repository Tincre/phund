import { render } from "@testing-library/react";
import FactSnippets from "../../../components/Sections/FactSnippets";

describe("FactSnippets", () => {
  it("should render the component", () => {
    render(<FactSnippets />);
  });
});
