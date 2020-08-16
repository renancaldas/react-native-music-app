import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
  const [searchText, onChangeText] = React.useState(null);

  const searchEvent = () => {
    if (searchText) {
      onSearch(searchText)
    }
  }
  
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
        defaultValue="Search for music"
        onBlur={() => searchEvent()}
        selectTextOnFocus
      />
      <TouchableOpacity onPress={() => searchEvent()}>
        <Text style={{ color: '#3a80f4', marginRight: 10}}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
