import React from "react";

import { CenterContainer, GradientBg } from "./styles";

const FullScreenContainer = ({ children }) => {

  return (
  <GradientBg colors={["rgba(190,110,110,1)", "rgba(46,43,79,1)"]}>
    <CenterContainer>
      {children}
    </CenterContainer>
  </GradientBg>
  );
};

export default FullScreenContainer;
