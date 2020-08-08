import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import * as Device from 'expo-device';

import Player from "./Components/Player/Player";

export default class App extends React.Component {

  getAsync = async () => {
    Device.getUptimeAsync().then(console.log)
    Device.getDeviceTypeAsync().then(console.log)
  }
  render() {
    console.log('>>> Device.osName', Device);
    this.getAsync();
    return (
      <SafeAreaView style={styles.container}>
        <Player />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEC",
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});