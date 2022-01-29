// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
