import { ImageBackground, Dimensions } from "react-native";

import styled from "styled-components/native";
import colors from "../../../constants/colors";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 6);

export const YearTitle = styled.Text`
  color: ${colors.text.title};
  font-size: 14px;
  z-index: 1;
`;

export const Title = styled.Text`
  color: ${colors.text.title};
  font-size: 16px;
  z-index: 1;
`;

export const Cover = styled.View`
  width: ${ITEM_WIDTH + 'px'};
  height: ${ITEM_HEIGHT + 'px'};
  justify-content: flex-end;
  padding: 10px;
`;

export const ImageCover = styled(ImageBackground)`
  width: ${ITEM_WIDTH + 'px'};
  height: ${ITEM_HEIGHT + 'px'};
  justify-content: flex-end;
  padding: 10px;
`;
