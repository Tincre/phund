// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
  it("should render the page", () => {
    render(<Index />);

    const headingArray = screen.getAllByRole("heading");

    headingArray.map((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });
});
