import React from "react";
import PageHeader from "./pageHeader";
import {
  Button,
  ButtonDiv,
  Content,
  Flexbox,
  HeadingContent,
  HeadingContentBlue,
  ParagraphContent,
  RoundedImage,
  RoundedImageBadge,
  StartLogo,
  StartParagraph,
  CardText,
  CardSubText,
  TextCenter,
  TextParagraph,
  Box,
} from "../../styles/styled";
import SvgItems from "./svgItems";

const Home: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <Flexbox>
        <div>
          <Content>
            <HeadingContent>
              Building Brands in the{" "}
              <HeadingContentBlue data-testid="digital-age">
                Digital Age
              </HeadingContentBlue>
            </HeadingContent>
          </Content>
          <Content>
            <ParagraphContent>
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </ParagraphContent>
          </Content>
          <ButtonDiv>
            <Button>Learn More</Button>
          </ButtonDiv>
        </div>
        <Content>
          <RoundedImage data-testid="rounded-image" />
          <RoundedImageBadge>
            <TextCenter>
              <Content>
                <StartLogo data-testid="start-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.1033 3.81663C11.4701 3.07346 12.5299 3.07346 12.8967 3.81663L14.8576 7.78909C15.0031 8.08394 15.2843 8.2884 15.6096 8.33595L19.9962 8.97712C20.8161 9.09696 21.1429 10.1048 20.5493 10.683L17.3768 13.773C17.1409 14.0027 17.0333 14.3339 17.0889 14.6584L17.8374 19.0226C17.9775 19.8396 17.12 20.4626 16.3864 20.0767L12.4655 18.0148C12.1741 17.8615 11.8259 17.8615 11.5345 18.0148L7.61363 20.0767C6.88 20.4626 6.02245 19.8396 6.16257 19.0226L6.91109 14.6584C6.96675 14.3339 6.85908 14.0027 6.62321 13.773L3.45068 10.683C2.85708 10.1048 3.18387 9.09696 4.00378 8.97712L8.39037 8.33595C8.71572 8.2884 8.99691 8.08394 9.14245 7.78909L11.1033 3.81663Z"
                      fill="#F8BD38"
                    />
                  </svg>
                </StartLogo>
                <StartParagraph data-testid="projects">Projects</StartParagraph>
              </Content>
              <Content>
                <CardText>
                  600+
                  <CardSubText> Done</CardSubText>
                </CardText>
              </Content>
            </TextCenter>
          </RoundedImageBadge>
        </Content>
      </Flexbox>
      <Box>
        <TextCenter>
          <TextParagraph>Powering next-gen companies</TextParagraph>
          <SvgItems />
        </TextCenter>
      </Box>
    </div>
  );
};
export default Home;
