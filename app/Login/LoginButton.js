import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

const LoginButton = ({ onPress, backgroundColor, text, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 5 }}>
      <View style={{ ...styles.container, backgroundColor }}>
        <Icon name={icon} size={30} color="white" style={{ marginRight: 10 }} />

        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    width: 200,
    height: 45,
    borderRadius: 50,
  },
  text: {
    color: 'white',
  },
  logo: {},
});

export default LoginButton;
