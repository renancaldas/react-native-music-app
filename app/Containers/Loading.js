

import React from "react";
import { ActivityIndicator, View, Text } from 'react-native';

const Loading = () => {
  return (
    <View style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ActivityIndicator size="large" color="#2196F3" />
    </View>
  );
};

export default Loading;
