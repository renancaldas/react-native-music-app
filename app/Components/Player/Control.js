import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

class Control extends React.Component {
  render() {
    const { play, pause, isPlaying } = this.props;
    
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <FontAwesome5
            name="backward"
            size={32}
            color="#93A8B3"
          ></FontAwesome5>
        </TouchableOpacity>
        {isPlaying ? (
          <TouchableOpacity style={styles.playButtonContainer} onPress={pause}>
            <FontAwesome5
              name="pause"
              size={32}
              color="#3D425C"
              style={[styles.playButton]}
            ></FontAwesome5>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.playButtonContainer} onPress={play}>
            <FontAwesome5
              name="play"
              size={32}
              color="#3D425C"
              style={[styles.playButton, { marginLeft: 5 }]}
            ></FontAwesome5>
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <FontAwesome5 name="forward" size={32} color="#93A8B3"></FontAwesome5>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Control;
