import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
  const [searchText, onChangeText] = React.useState("system of a down");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 40,
        width: "100%",
        borderRadius: 20,
        backgroundColor: "lightgrey",
        paddingHorizontal: 10,
      }}
    >
      <EvilIcons name="search" size={32} />
      <TextInput
        style={{ height: 40, width: "60%" }}
        onChangeText={(text) => onChangeText(text)}
        value={searchText}
        defaultValue="Search for music here..."
        onBlur={() => onSearch(searchText)}
        selectTextOnFocus
      />
      <Button title="Search" onPress={() => onSearch(searchText)} />
    </View>
  );
};

export default Search;
