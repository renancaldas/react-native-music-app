import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import colors from "../../constants/colors";

import { Entypo } from "@expo/vector-icons";
import responsiveFont from "../../helpers/responsiveFont";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.background.app};
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px;
  border-color: white; */
`;

export const Title = styled.Text`
  color: ${colors.text.title};
  font-size: ${responsiveFont(40) + "px"};
`;

export const Subtitle = styled.Text`
  color: ${colors.text.default};
  font-size: ${responsiveFont(18) + "px"};
`;

export const LinkRow = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const LinkBack = styled(Entypo)`
  color: ${colors.solid.blue};
  font-size: ${responsiveFont(20) + "px"};
`;

export const Link = styled.Text`
  color: ${colors.solid.blue};
  font-size: ${responsiveFont(20) + "px"};
  margin-left: 5px;
`;
