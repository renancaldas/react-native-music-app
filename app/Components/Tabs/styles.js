import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #000;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const TabIcon = styled(TouchableOpacity)`
    height: 100%;
    width: 25%;
    
    background-color: ${props => props.active ? colors.background.app : "#000"};
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
