import React from "react";
import { styles } from "./styles";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Header";
import Cover from "./Cover";
import Album from "./Album";
import Slider from "./Slider";
import Control from "./Control";

export default class Player extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flex: 3,
            justifyContent: "center",
          }}
        >
          <Header />
          <Cover />
          <Album />
        </View>

        <View style={{ flex: 0.5 }}>
          <Slider />
        </View>

        <View style={{ flex: 1.2 }}>
          <Control />
        </View>
      </View>
    );
  }
}
