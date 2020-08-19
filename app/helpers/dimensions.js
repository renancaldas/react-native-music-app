import { Dimensions } from "react-native";

export const getLogoSize = () => {
    const windowWidth = Dimensions.get('window').width;
    const iphoneWidth = 320;
    const iphoneSize = 80;
    
    return (windowWidth * iphoneSize) / iphoneWidth;
}