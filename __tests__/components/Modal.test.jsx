import { render } from "@testing-library/react";
import Modal from "../../components/Modal";

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};
describe("Modal", () => {
  it("should render the component with props", () => {
    const mockProps = {
      title: "Blah-title",
      buttonText: "Blah-button",
      setIsClicked: (inputBoolean) =>
        typeof inputBoolean !== "undefined" ? !inputBoolean : true,
      safeType: "cap",
      children: <></>,
    };
    const renderVal = render(<Modal {...mockProps} />);
    const button = renderVal.getByRole("button", {
      name: mockProps.buttonText,
    });
    expect(button).toBeInTheDocument();
  });
});
describe("Modal", () => {
  it("should render the component with props", () => {
    const mockProps = {
      title: "Blah-title",
      buttonText: "Blah-button",
      setIsClicked: (inputBoolean) =>
        typeof inputBoolean !== "undefined" ? !inputBoolean : true,
      safeType: "discount",
      children: <></>,
    };
    render(<Modal {...mockProps} />);
  });
});
describe("Modal", () => {
  it("should render the component with props", () => {
    const mockProps = {
      title: "Blah-title",
      buttonText: "Blah-button",
      setIsClicked: (inputBoolean) =>
        typeof inputBoolean !== "undefined" ? !inputBoolean : true,
      safeType: "mfn",
      children: <></>,
    };
    render(<Modal {...mockProps} />);
  });
});
describe("Modal", () => {
  it("should not render the component with props", () => {
    const mockProps = {
      title: "Blah-title",
      buttonText: "Blah-button",
      setIsClicked: (inputBoolean) =>
        typeof inputBoolean !== "undefined" ? !inputBoolean : true,
      safeType: "cap",
      children: <></>,
    };
    render(<Modal {...mockProps} />);
  });
});
