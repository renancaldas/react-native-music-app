import { Dimensions, SafeAreaView } from "react-native";

import styled from "styled-components/native";
import colors from "./constants/colors";

const windowHeight = Dimensions.get('window').height;
const tabHeight = 60;
const viewHeight = windowHeight - tabHeight - 20;

export const AppContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${colors.background.app};
    padding-top: ${Platform.OS === "android" ? 20 + 'px' : 0};
`;

export const ViewWrapper = styled.View`
  height: ${viewHeight + 'px'};
  box-shadow: 0px 10px 5px #111;
  z-index: 10;
`;

export const TabWrapper = styled.View`
  height: ${tabHeight + 'px'};
`;
