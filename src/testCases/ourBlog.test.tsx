import { render, screen } from "@testing-library/react";
import OurBlog from "../components/ourBlogs/ourBlog";

describe("OurBlog component", () => {
  const mockBlogs = [
    {
      author: "",
      title: "",
      description: "",
      url: "",
      urlToImage: "",
      publishedAt: "",
      content: "",
    },
  ];

  it("renders main heading", () => {
    render(<OurBlog blogs={mockBlogs} />);
    const mainHeading = screen.getByText(/Our Blogs/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders "View all posts" button', () => {
    render(<OurBlog blogs={mockBlogs} />);
    const viewAllButton = screen.getByRole("button", {
      name: /View all posts/i,
    });
    expect(viewAllButton).toBeInTheDocument();
  });

  it("does not render any OurBlogItem components when blogs prop is null", () => {
    render(<OurBlog blogs={null} />);
    const ourBlogItems = screen.queryAllByTestId("our-blog-item");
    expect(ourBlogItems).toHaveLength(0);
  });
});
