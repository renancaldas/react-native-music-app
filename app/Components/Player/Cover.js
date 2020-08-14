import React from "react";
import { styles } from "./styles";
import { Image, View } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={{ ...styles.coverContainer }}>
        <Image
          source={require("../../assets/greenday.jpg")}
          style={styles.cover}
        ></Image>
      </View>
    );
  }
}
