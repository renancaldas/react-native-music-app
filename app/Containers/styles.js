import styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;

`
export const CenterContainer = styled.View`
  flex: 1; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
`

export const GradientBg = styled(LinearGradient)`
  flex: 1;
  padding-top: 50px;
`

export const ViewContent = styled.View`
  flex: 8;
  margin: 0px 20px;
`

export const Footer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
`