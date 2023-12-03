import React from "react";
import {
  Button,
  PostButtonDiv,
  Content,
  MainHeading,
} from "../../styles/styled";
import OurBlogItem from "./ourBlogItem";
import { ApiData } from "../../types";

interface PropsData {
  blogs: ApiData[] | null;
}
const OurBlog: React.FC<PropsData> = ({ blogs }) => {
  const useThreeObject = blogs && blogs.slice(0, 3);
  return (
    <div>
      <MainHeading>Our Blogs</MainHeading>
      <p></p>
      <Content data-testid={`our-blog-items`}>
        {useThreeObject &&
          useThreeObject.map((blog: ApiData, index: number) => {
            return <OurBlogItem blog={blog} index={index} key={index} />;
          })}
      </Content>
      <PostButtonDiv>
        <Button>View all posts</Button>
      </PostButtonDiv>
    </div>
  );
};
export default OurBlog;
