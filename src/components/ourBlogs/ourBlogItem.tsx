import React from "react";
import {
  BlogCard,
  BlogImage,
  BlogHeading,
  BlogParagraph,
  SmallArrow,
} from "../../styles/styled";
import { ApiData } from "../../types";

interface PropsData {
  blog: ApiData;
  index: number;
}

const OurBlogItem: React.FC<PropsData> = ({ blog, index }) => {
  const readMore = (url: string) => {
    window.open(url);
  };
  return (
    <div key={index} id={blog?.publishedAt}>
      <BlogImage src={blog?.urlToImage} alt="No Image Found" />
      <BlogCard>
        <BlogHeading>{blog?.title?.slice(0, 19)}</BlogHeading>
        <BlogParagraph>“{blog?.content?.slice(0, 300)}</BlogParagraph>
        <SmallArrow onClick={() => readMore(blog?.url)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M1 10H19"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 19L19 10L10 1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SmallArrow>
      </BlogCard>
    </div>
  );
};
export default OurBlogItem;
