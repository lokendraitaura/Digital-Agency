import { render, screen } from "@testing-library/react";
import FooterPage from "../components/footerPage";

describe("FooterPage component", () => {
  it("renders Digital agency heading", () => {
    render(<FooterPage />);
    const digitalAgencyHeading = screen.getByText(/Digital agency/i);
    expect(digitalAgencyHeading).toBeInTheDocument();
  });

  it("renders Company section with menu items", () => {
    render(<FooterPage />);
    const companyHeading = screen.getByText(/Company/i);
    expect(companyHeading).toBeInTheDocument();

    const aboutMenuItem = screen.getByText(/About/i);
    const featuresMenuItem = screen.getByText(/Features/i);
    const worksMenuItem = screen.getByText(/Works/i);
    const careerMenuItem = screen.getByText(/Career/i);

    expect(aboutMenuItem).toBeInTheDocument();
    expect(featuresMenuItem).toBeInTheDocument();
    expect(worksMenuItem).toBeInTheDocument();
    expect(careerMenuItem).toBeInTheDocument();
  });

  it("renders Help section with menu items", () => {
    render(<FooterPage />);
    const helpHeading = screen.getByText(/Help/i);
    expect(helpHeading).toBeInTheDocument();

    const customerSupportMenuItem = screen.getByText(/Customer Support/i);
    const deliveryDetailsMenuItem = screen.getByText(/Delivery Details/i);
    const termsConditionsMenuItem = screen.getByText(/Terms & Conditions/i);
    const privacyPolicyMenuItem = screen.getByText(/Privacy Policy/i);

    expect(customerSupportMenuItem).toBeInTheDocument();
    expect(deliveryDetailsMenuItem).toBeInTheDocument();
    expect(termsConditionsMenuItem).toBeInTheDocument();
    expect(privacyPolicyMenuItem).toBeInTheDocument();
  });

  it("renders Resources section with menu items", () => {
    render(<FooterPage />);
    const resourcesHeading = screen.getByText(/Resources/i);
    expect(resourcesHeading).toBeInTheDocument();

    const freeEbooksMenuItem = screen.getByText(/Free eBooks/i);
    const howToBlogMenuItem = screen.getByText(/How to - Blog/i);

    expect(freeEbooksMenuItem).toBeInTheDocument();
    expect(howToBlogMenuItem).toBeInTheDocument();
  });
});
