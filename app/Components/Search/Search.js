import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons, Entypo } from "@expo/vector-icons";
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
        <View
          style={{
            backgroundColor: colors.solid.black,
            width: 22,
            height: 22,
            position: "absolute",
            top: 10,
            left: 5,
            borderRadius: 10,
          }}
        />

        <Entypo
          name="spotify"
          size={32}
          style={{ color: colors.solid.green, marginTop: 5, width: 50 }}
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
