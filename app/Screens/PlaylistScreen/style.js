import { Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styled from "styled-components/native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("window");

export const Title = styled.Text`
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

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background.app};

  flex-direction: column;
  padding: 10px;
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

export const Row = styled(TouchableOpacity)`
  flex-direction: row;
  border-top-color: #333;
  border-bottom-color: #333;
  border-top-width: 1px;
  border-bottom-width: 1px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const Cell = styled.Text`
  color: ${colors.text.title};
  margin: 0px 5px;
`;

export const IconMaterialIcons = styled(MaterialIcons)`
  font-size: 25px;
`;
