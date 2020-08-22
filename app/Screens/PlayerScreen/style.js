import { Dimensions, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import styled from "styled-components/native";
import colors from "../../constants/colors";


export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background.app};

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 10px;
`;


export const FullWidth = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${colors.text.title};
`;


export const Controls = styled.View`
  border: 1px solid red;
  width: 100%;


  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;