import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
        <Text
          style={[
            styles.text,
            { fontSize: 15, fontWeight: "500", marginTop: 5 },
          ]}
        >
          Rock'n Roll
        </Text>
      </View>
    );
  }
}

export default Header;
