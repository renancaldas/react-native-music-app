import React from "react";
import { useSelector } from "react-redux";
import { Text, View, Button } from "react-native";

const Player = ({ route, navigation, text }) => {
  const { youtubeLogin } = useSelector(state => state.User);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Code: {youtubeLogin.code}</Text>
      <Text>Scope: {youtubeLogin.scope}</Text>

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
