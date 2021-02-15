import styled from 'styled-components/native';
import { Text as ExpoText } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export const FlexColumnBetween = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const BigTitle = styled(ExpoText)`
  color: white;
  font-size: 40px;
`

export const Icon = styled(SimpleLineIcons)`
  color: lightgrey;
  font-size: 50px;
`;


export const MarginBottom = styled.View`
  margin-bottom: 30px;
`