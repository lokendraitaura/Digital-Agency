import { render, screen } from "@testing-library/react";
import Home from "../components/home/home";

describe("Home component", () => {
  it("renders page header", () => {
    render(<Home />);
    const pageHeader = screen.getByTestId("page-header");
    expect(pageHeader).toBeInTheDocument();
  });

  it("renders main content with correct text", () => {
    render(<Home />);
    const heading = screen.getByText(/Building Brands in the/i);
    const subHeadingeading = screen.getByTestId("digital-age");
    const paragraph = screen.getByText(
      /Your partner in navigating the ever-evolving landscape of digital marketing/i
    );
    expect(heading).toBeInTheDocument();
    expect(subHeadingeading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it('renders "Learn More" button', () => {
    render(<Home />);
    const learnMoreButton = screen.getByRole("button", { name: /Learn More/i });
    expect(learnMoreButton).toBeInTheDocument();
  });

  it("renders rounded image and badge", () => {
    render(<Home />);
    const roundedImage = screen.getByTestId("rounded-image");
    const startLogo = screen.getByTestId("start-logo");
    expect(roundedImage).toBeInTheDocument();
    expect(startLogo).toBeInTheDocument();
  });

  it("renders project count with correct value", () => {
    render(<Home />);
    const projectsText = screen.getByTestId("projects");
    const projectCount = screen.getByText(/600+/i);
    const projectSubText = screen.getByText(/Done/i);
    expect(projectCount).toBeInTheDocument();
    expect(projectSubText).toBeInTheDocument();
    expect(projectsText).toBeInTheDocument();
  });

  it("renders box with text and SVG items", () => {
    render(<Home />);
    const powerText = screen.getByText(/Powering next-gen companies/i);
    const svgItems = screen.getByTestId("svg-items");
    expect(powerText).toBeInTheDocument();
    expect(svgItems).toBeInTheDocument();
  });
});
