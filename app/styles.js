import {SafeAreaView} from 'react-native';

import styled from 'styled-components/native';
import colors from './constants/colors';

import {tabHeight, viewHeight} from './helpers/dimensions';

export const AppContainer = styled(SafeAreaView)`
  height: 100%;
  flex: 1;
  background-color: ${colors.background.app};
  padding-top: ${Platform.OS === 'android' ? 25 + 'px' : 0};
`;

export const RouteWrapper = styled.View`
  margin-bottom: ${tabHeight + 'px'};
`;

export const ViewWrapper = styled.View`
  height: 100%;
  box-shadow: 0px 20px 30px ${colors.solid.black};
`;

export const TabWrapper = styled.View`
  height: ${tabHeight + 'px'};
  position: absolute;
  bottom: 0;
`;
