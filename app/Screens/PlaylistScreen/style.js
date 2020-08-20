import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${colors.background.app};

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.Text`
    color: white;
`;
