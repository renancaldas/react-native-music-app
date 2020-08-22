import { Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import TextTicker from "react-native-text-ticker";

import styled from "styled-components/native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background.app};

  flex-direction: column;
  padding: 10px;

  display: ${({ isSelectedRoute }) => {
    return isSelectedRoute ? "flex" : "none";
  }};
`;

export const NoResults = styled.Text`
  color: white;
  font-size: 30px;
  position: relative;
  left: ${width / 3 - 10 + "px"};
  bottom: ${height / 4 + "px"};
`;

export const TitleCategory = styled.Text`
  color: ${colors.text.title};
  font-size: 22px;
  margin: 10px 0px;
  text-align: center;
  font-family: "SatisfyRegular";
`;

export const HeaderRow = styled.View`
  margin-top: 10px;
  flex-direction: row;
  height: 30px;
  align-items: center;
  background-color: #101010;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const HeaderCell = styled.Text`
  color: ${colors.text.default};
  text-align: left;
  margin: 0px 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  border-top-color: #333;
  border-bottom-color: #333;
  border-top-width: 1px;
  border-bottom-width: 1px;
  height: 40px;
  align-items: center;
`;

export const RowCell = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.text.title};
`;
export const TitleScroll = styled(TextTicker)`
  color: ${colors.text.title};
`;

export const Subtitle = styled.Text`
  color: ${colors.text.default};
`;

export const IconMaterialIcons = styled(MaterialIcons)`
  font-size: 25px;
  color: ${colors.text.title};
`;

export const IconIonicons = styled(Ionicons)`
  font-size: 25px;
  color: ${colors.text.title};
`;
