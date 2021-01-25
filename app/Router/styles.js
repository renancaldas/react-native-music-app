import styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
`

export const GradientBg = styled(LinearGradient)`
  flex: 1;
  padding-top: 50px;
  align-items: stretch;
  justify-content: center;
`

export const Header = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    color: white;
    font-size: 28px;
`

export const Footer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
`