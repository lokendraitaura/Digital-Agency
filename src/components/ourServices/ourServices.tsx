import React from "react";
import {
  Button,
  MainHeading,
  P,
  TextCenter,
  ButtonDiv,
  Box,
} from "../../styles/styled";
import ServicesText from "./servicesText";
import ServiceDirector from "./serviceDirector";

const OurServices: React.FC = () => {
  return (
    <div>
      <Box>
        <TextCenter>
          <MainHeading>Explore Our Services</MainHeading>
          <P>
            We are self-service data analytics software that lets you create
            visually.
          </P>
          <ServicesText />
          <ButtonDiv>
            <Button>Learn More</Button>
          </ButtonDiv>
        </TextCenter>
      </Box>
      <ServiceDirector />
    </div>
  );
};
export default OurServices;
