import {render, screen} from "@testing-library/react";
import StatNumberCard from "../../components/StatNumberCard";

describe("StatNumberCard", () => {
  it("should render the default icon", () => {
    render(
      <StatNumberCard {
      ...{ icon: undefined, numberStat: 300, text: 'huge' }} />
    );
    const headingArray = screen.getAllByRole("heading");

    headingArray.map((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });
});
