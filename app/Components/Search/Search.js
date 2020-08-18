import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import colors from "../../constants/colors";

const Search = ({ onSearch }) => {
  const [searchText, onChangeText] = React.useState(null);

  const searchEvent = () => {
    if (searchText) {
      onSearch(searchText);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 40,
        width: "100%",
        borderRadius: 20,
        backgroundColor: colors.solid.lightgrey,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ width: 10 }}>
        <AntDesign
          name="youtube"
          size={32}
          style={{ color: "red", marginTop: 5, width: 50 }}
        />
      </View>

      <TextInput
        style={{ height: 40, width: "60%" }}
        onChangeText={(text) => onChangeText(text)}
        value={searchText}
        defaultValue="Search for music"
        onBlur={() => searchEvent()}
        selectTextOnFocus
      />

      <TouchableOpacity onPress={() => searchEvent()}>
        <EvilIcons name="search" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
