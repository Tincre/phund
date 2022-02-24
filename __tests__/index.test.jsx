// __tests__/index.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import Index from "../pages/index";
import { SessionProvider } from "next-auth/react";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    },
  };
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("Index", () => {
  const mockSession = {
    data: {
      session: {
        user: {
          image: null,
          name: "John",
          email: "john@email.com",
        },
      },
    },
    expires: 123213139,
    status: "loading",
  };
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
  it("should fire the event", () => {
    render(
      <SessionProvider session={mockSession}>
        <Index />
      </SessionProvider>
    );

    const button = screen.getByRole("button", { name: /Mobile Menu/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    //expect(button).toBeInTheDocument();
  });
});

describe("Index", () => {
  const mockSession = {
    data: {
      session: {
        user: {
          image: null,
          name: "John",
          email: "john@email.com",
        },
      },
    },
    expires: 123213139,
    status: "authenticated",
  };

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
