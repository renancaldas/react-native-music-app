import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.background.app};

  flex-direction: column;
  /* align-items: center;
    justify-content: space-around; */

  padding: 10px;
`;

export const Title = styled.Text`
  color: white;
  position: relative;
  bottom: 200px;
  font-size: 30px;
`;

export const ViewCenter = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
