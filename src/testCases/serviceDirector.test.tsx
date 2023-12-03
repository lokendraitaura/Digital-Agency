import { render, screen } from "@testing-library/react";
import ServiceDirector from "../components/ourServices/serviceDirector";

describe("ServiceDirector Component", () => {
  test("renders correctly", () => {
    render(<ServiceDirector />);
    const serviceDirectorElement = screen.getByTestId("service-director");
    expect(serviceDirectorElement).toBeInTheDocument();
  });

  test("renders director heading and paragraph", () => {
    render(<ServiceDirector />);
    const directorHeading = screen.getByText(
      "“The results have been incredible. With Power Digital, it feels " +
        "like they’re in our trench, supporting and understanding us. " +
        "They’re like a partner and mentor in helping us get where we want to be.”"
    );
    expect(directorHeading).toBeInTheDocument();

    const directorParagraph = screen.getByTestId("director-name");
    expect(directorParagraph).toBeInTheDocument();
  });
});
