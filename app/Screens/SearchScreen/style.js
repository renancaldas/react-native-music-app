import { Dimensions, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background.app};

  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 30px;
  position: relative;
  left: ${(width/3) - 10 + 'px'};
  bottom: ${(height/4) + 'px'};;
`;

export const TitleCategory = styled.Text`
  color: ${colors.text.title};
  font-size: 18px;
  margin: 15px 5px;
  text-align: center;
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
`

export const RowTitle = styled.Text`
  color: ${colors.text.title};
`