import { render, screen } from "@testing-library/react";
import ServicesText from "../components/ourServices/servicesText";

describe("ServicesText component", () => {
  it("renders App Development section", () => {
    render(<ServicesText />);
    const appDevelopmentSection = screen.getByText(/App Development/i);
    expect(appDevelopmentSection).toBeInTheDocument();
  });

  it("renders Web Designing section", () => {
    render(<ServicesText />);
    const webDesigningSection = screen.getByText(/Web Designing/i);
    expect(webDesigningSection).toBeInTheDocument();
  });

  it("renders Graphic Designing section", () => {
    render(<ServicesText />);
    const graphicDesigningSection = screen.getByText(/Graphic Designing/i);
    expect(graphicDesigningSection).toBeInTheDocument();
  });

  it("renders Digital Marketing section", () => {
    render(<ServicesText />);
    const digitalMarketingSection = screen.getByText(/Digital Marketing/i);
    expect(digitalMarketingSection).toBeInTheDocument();
  });

  it("renders all service logos", () => {
    render(<ServicesText />);
    const serviceLogo1 = screen.getByTestId("service-logo-1");
    const serviceLogo2 = screen.getByTestId("service-logo-2");
    const serviceLogo3 = screen.getByTestId("service-logo-3");
    const serviceLogo4 = screen.getByTestId("service-logo-4");

    expect(serviceLogo1).toBeInTheDocument();
    expect(serviceLogo2).toBeInTheDocument();
    expect(serviceLogo3).toBeInTheDocument();
    expect(serviceLogo4).toBeInTheDocument();
  });
});
