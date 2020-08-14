import React from "react";
import { Text, View, Button } from "react-native";

const Player = ({ route, navigation, text }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{text || "Player Screen"}</Text>

      <Button
        title="Go to Player... again"
        onPress={() => navigation.push("Player")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Player;
