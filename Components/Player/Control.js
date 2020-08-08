import React from "react";
import { styles } from "./styles";
import { 
    TouchableOpacity, View } from "react-native";
    import { FontAwesome5 } from "@expo/vector-icons";

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          //marginTop: 16,
          // borderWidth: 1
        }}
      >
        <TouchableOpacity>
          <FontAwesome5
            name="backward"
            size={32}
            color="#93A8B3"
          ></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButtonContainer}>
          <FontAwesome5
            name="play"
            size={32}
            color="#3D425C"
            style={[styles.playButton, { marginLeft: 8 }]}
          ></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="forward" size={32} color="#93A8B3"></FontAwesome5>
        </TouchableOpacity>
      </View>
    );
  }
}
