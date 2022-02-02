import { render } from "@testing-library/react";
import Stats from "../../../components/Sections/Stats";
import { stats1Data } from "../../../cms.data";

describe("Stats component tests", () => {
  it("should render the component", () => {
    render(<Stats />);
  });
  it("should render the component with data", () => {
    render(<Stats data={stats1Data} />);
  });
});
