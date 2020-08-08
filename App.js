import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Header from "./Components/Player/Header";
import Cover from "./Components/Player/Cover";
import Album from "./Components/Player/Album";
import Slider from "./Components/Player/Slider";
import Control from "./Components/Player/Control";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Header />
          <Cover />
          <Album />
        </View>

        <Slider />
        <Control />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEC",
  },
});
