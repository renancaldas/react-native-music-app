import {Dimensions} from 'react-native';
import * as Device from 'expo-device';

const {height, width} = Dimensions.get('window');

export const getLogoSize = () => {
  const windowWidth = width;
  const iphoneWidth = 320;
  const iphoneSize = 80;

  return (windowWidth * iphoneSize) / iphoneWidth;
};

const getViewHeight = () => {
  let offsetPercentage = 0;

  if (Platform.OS === 'android') {
    offsetPercentage = 0;
  } else {
    const model = Device.modelName.replace('iPhone')
    offsetPercentage = 6 / 100;
  }

  return height - (height * offsetPercentage);
};

export const tabHeight = 60;
export const viewHeight = getViewHeight();

console.log('>>> Device', Device);
console.log('>>> window size', Dimensions.get('window'));
console.log('>>> viewHeight', viewHeight);
