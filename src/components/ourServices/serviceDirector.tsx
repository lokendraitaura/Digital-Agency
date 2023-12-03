import React from "react";
import {
  Box,
  Content,
  DirectorHeading,
  DirectorImage,
  FlexDiv,
  ServiceContent,
  DirectorParagraph,
  DirectorSubP,
  Ml6Rem,
  LeftRightArrow,
  ArrowDiv,
} from "../../styles/styled";

const ServiceDirector: React.FC = () => {
  return (
    <Box data-testid="service-director">
      <Content>
        <FlexDiv>
          <ServiceContent>“</ServiceContent>
          <DirectorImage></DirectorImage>

          <Ml6Rem>
            <DirectorHeading>
              “The results have been incredible. With Power Digital, it feels
              like they’re in our trench, supporting and understanding us.
              They’re like a partner and mentor in helping us get where we want
              to be.”
            </DirectorHeading>
            <DirectorParagraph data-testid="director-name">
              David Calathan -
              <DirectorSubP>
                {" "}
                Director of Design Operations, New York
              </DirectorSubP>
            </DirectorParagraph>
            <ArrowDiv>
              <LeftRightArrow>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M21 11H1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 21L1 11L11 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </LeftRightArrow>
              <LeftRightArrow>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M1 11H21"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 21L21 11L11 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </LeftRightArrow>
            </ArrowDiv>
          </Ml6Rem>
        </FlexDiv>
      </Content>
    </Box>
  );
};
export default ServiceDirector;
