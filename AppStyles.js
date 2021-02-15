import styled from 'styled-components/native';
import { Text as ExpoText } from 'react-native';

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FlexRowBetween = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FlexColumn = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(ExpoText)`
  color: white;
  font-size: 28px;
`

export const Subtitle = styled(ExpoText)`
  color: white;
  font-size: 20px;
`

export const Bold = styled(ExpoText)`
  color: white;
  font-weight: bold;
`

export const Text = styled(ExpoText)`
  color: white;
`