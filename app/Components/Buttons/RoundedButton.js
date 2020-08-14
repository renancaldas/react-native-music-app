import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

const RoundedButton = ({ onPress, backgroundColor, text, icon }) => {
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

    // backgroundColor: '#1a75c9', // blue // 135a9c
    // backgroundColor: '#24d15d' // green
    // backgroundColor: '#f80002' // red
    width: 200,
    height: 45,
    borderRadius: 50,
  },
  text: {
    color: "white",
  },
  logo: {},
});

export default RoundedButton;
