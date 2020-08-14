import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          //marginTop: 32,
          // borderWidth: 1
        }}
      >
        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>
          Let Yourself Go
        </Text>
        <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>
          Green Day
        </Text>
      </View>
    );
  }
}
