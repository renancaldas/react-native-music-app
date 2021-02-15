import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";


export const Row = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const FlexColumn = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Scroll = styled.ScrollView`
  margin: 10px 0px;
`

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  margin-right: 10px;
`