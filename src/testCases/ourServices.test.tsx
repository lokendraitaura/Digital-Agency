import React from "react";
import { render, screen } from "@testing-library/react";
import OurServices from "../components/ourServices/ourServices";

describe("OurServices component", () => {
  it("renders main heading", () => {
    render(<OurServices />);
    const mainHeading = screen.getByText(/Explore Our Services/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it("renders introductory paragraph", () => {
    render(<OurServices />);
    const introductoryText = screen.getByText(
      /We are self-service data analytics software that lets you create visually./i
    );
    expect(introductoryText).toBeInTheDocument();
  });

  it("renders ServicesText component", () => {
    render(<OurServices />);
    const servicesTextComponent = screen.getByTestId("services-text");
    expect(servicesTextComponent).toBeInTheDocument();
  });

  it('renders "Learn More" button', () => {
    render(<OurServices />);
    const learnMoreButton = screen.getByRole("button", { name: /Learn More/i });
    expect(learnMoreButton).toBeInTheDocument();
  });

  it("renders ServiceDirector component", () => {
    render(<OurServices />);
    const serviceDirectorComponent = screen.getByTestId("service-director");
    expect(serviceDirectorComponent).toBeInTheDocument();
  });
});
