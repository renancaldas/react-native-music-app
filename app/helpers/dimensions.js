import { Dimensions } from "react-native";

export const windowHeight = Dimensions.get('window').height;
export const tabHeight = 60;
export const viewHeight = windowHeight - tabHeight - 20;

export const getLogoSize = () => {
  const windowWidth = Dimensions.get("window").width;
  const iphoneWidth = 320;
  const iphoneSize = 80;

  return (windowWidth * iphoneSize) / iphoneWidth;
};
