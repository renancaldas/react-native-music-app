import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          // marginTop: 24,
          // borderWidth: 1
        }}
      >
        <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
        <Text
          style={[
            styles.text,
            { fontSize: 15, fontWeight: "500", marginTop: 8 },
          ]}
        >
          Rock'n Roll
        </Text>
      </View>
    );
  }
}
