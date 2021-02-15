import styled from 'styled-components/native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

export const Results = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 90%;
  padding: 10px 0px;
`
export const Column = styled.View`
  height: 100%;
  width: 32%;
`

export const Row = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const FlexColumn = styled.View`
  display: flex;
  flex-direction: column;
  width: 79%;
`;

export const Scroll = styled.ScrollView`
  margin: 10px 0px;
`

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`
export const Icon = styled(SimpleLineIcons)`
  color: lightgrey;
  font-size: 50px;
  margin-right: 10px;
  height: 52px;
  width: 52px;
`;