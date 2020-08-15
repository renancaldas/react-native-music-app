import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import TextTicker from "react-native-text-ticker";

class Album extends React.Component {
  render() {
    const { author, title } = this.props;

    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={[styles.textDark, { fontSize: 18, fontWeight: "500" }]}>
          {author.name}
        </Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextTicker
            style={[styles.text, { fontSize: 16, marginTop: 8 }]}
            loop
            scroll={false}
          >
            {title}
          </TextTicker>
        </View>
      </View>
    );
  }
}

export default Album;
