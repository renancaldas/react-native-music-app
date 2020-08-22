import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import styled from "styled-components/native";
import colors from "../../constants/colors";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3);

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background.app};

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 10px;

  display: ${({ isSelectedRoute }) => {
    return isSelectedRoute ? 'flex' : 'none';
  }};
`;

export const TitleWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50px;
`;

export const Title = styled.Text`
  color: ${colors.text.title};
  font-size: 20px;
`;

export const Subtitle = styled.Text`
  color: ${colors.text.default};
  font-size: 16px;
`;


export const Cover = styled.View`
  height: ${ITEM_HEIGHT + 'px'};
`;

export const Controls = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BackButton = styled(FontAwesome5)`
  color: ${colors.text.title};
  font-size: 30px;
`;

export const PlayButton = styled(FontAwesome5)`
  color: ${colors.text.title};
  font-size: 40px;
`;

export const ForwardButton = styled(FontAwesome5)`
  color: ${colors.text.title};
  font-size: 30px;
`;
