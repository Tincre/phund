// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import { SessionProvider } from "next-auth/react";

export const mockSession = {
  data: {
    session: {
      user: {
        image: null,
        name: "John",
        email: "john@email.com",
      },
      expires: 123213139,
      status: "loading",
    },
  },
};
describe("Index", () => {
  it("should render the page", () => {
    render(
      <SessionProvider session={mockSession}>
        <Index />
      </SessionProvider>
    );

    const headingArray = screen.getAllByRole("heading");

    headingArray.map((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });
});

describe("Index", () => {
  it("should render the page", () => {
    render(
      <SessionProvider session={undefined}>
        <Index />
      </SessionProvider>
    );

    const headingArray = screen.getAllByRole("heading");

    headingArray.map((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });
});
