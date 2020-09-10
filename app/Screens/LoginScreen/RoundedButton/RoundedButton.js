import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

import colors from '../../../constants/colors';

const RoundedButton = ({ onPress, backgroundColor, text, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 5 }}>
      <View style={{ ...styles.container, backgroundColor }}>
        <Icon name={icon} size={30} color={colors.solid.white} style={{ marginRight: 10 }} />

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
    color: colors.solid.white,
  },
  logo: {},
});

export default RoundedButton;
