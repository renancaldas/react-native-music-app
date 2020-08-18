import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from '../../constants/colors';

class Control extends React.Component {
  render() {
    const { back, play, pause, isPlaying } = this.props;
    
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={back}>
          <FontAwesome5
            name="backward"
            size={32}
            color={colors.buttons.player}
          ></FontAwesome5>
        </TouchableOpacity>
        {isPlaying ? (
          <TouchableOpacity style={styles.playButtonContainer} onPress={pause}>
            <FontAwesome5
              name="pause"
              size={32}
              color={colors.buttons.player}
              style={[styles.playButton]}
            ></FontAwesome5>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.playButtonContainer} onPress={play}>
            <FontAwesome5
              name="play"
              size={32}
              color={colors.buttons.player}
              style={[styles.playButton, { marginLeft: 5 }]}
            ></FontAwesome5>
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <FontAwesome5 name="forward" size={32} color={colors.buttons.player}></FontAwesome5>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Control;
