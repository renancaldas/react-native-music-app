import { SafeAreaView } from "react-native";

import styled from "styled-components/native";
import colors from "./constants/colors";

import { tabHeight, viewHeight } from "./helpers/dimensions";

export const AppContainer = styled(SafeAreaView)`
  height: 100%;
  flex: 1;
  background-color: ${colors.background.app};
  padding-top: ${Platform.OS === "android" ? 20 + "px" : 0};
`;

export const ViewWrapper = styled.View`
  height: ${viewHeight + 'px'};
  box-shadow: 0px 10px 5px #111;
`;

export const TabWrapper = styled.View`
  height: ${tabHeight + "px"};
`;
