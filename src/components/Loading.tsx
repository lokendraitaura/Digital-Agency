import React from "react";
import { SpinnerWrapper, Spinner } from "../styles/styled";

const Loading: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default Loading;
