import React from "react";
import { styles } from "./styles";
import { Image, View } from "react-native";

class Cover extends React.Component {
  render() {
    const { thumbs } = this.props;
    
    return (
      <View style={{ ...styles.coverContainer }}>
        <Image
          source={{
            uri: thumbs[thumbs.length - 1].url,
          }}
          style={styles.cover}
        ></Image>
      </View>
    );
  }
}

export default Cover;