import { render, screen } from "@testing-library/react";
import PageHeader from "../components/home/pageHeader";

describe("PageHeader Component", () => {
  test("renders without errors", () => {
    render(<PageHeader />);
    const pageHeaderElement = screen.getByTestId("page-header");
    expect(pageHeaderElement).toBeInTheDocument();
  });

  test("displays the header logo", () => {
    render(<PageHeader />);
    const headerLogoElement = screen.getByTestId("header-logo");
    expect(headerLogoElement).toBeInTheDocument();
  });

  test("displays the header title", () => {
    render(<PageHeader />);
    const headerTitleElement = screen.getByText("Digital agency");
    expect(headerTitleElement).toBeInTheDocument();
  });

  test("displays the navigation component", () => {
    render(<PageHeader />);
    const navElement = screen.getByTestId("nav");
    expect(navElement).toBeInTheDocument();
  });

  test("displays the 'Get in Touch' button", () => {
    render(<PageHeader />);
    const getInTouchButton = screen.getByText("Get in Touch");
    expect(getInTouchButton).toBeInTheDocument();
  });

  test("handles 'Get in Touch' button click", () => {
    render(<PageHeader />);
    const learnMoreButton = screen.getByRole("button", {
      name: /Get in Touch/i,
    });
    expect(learnMoreButton).toBeInTheDocument();
  });
});
