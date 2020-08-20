import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import colors from "../../../constants/colors";

import spotifyApi from "../../../api/spotify";
import {
  setSearchResultsAction,
} from "../../../Redux/Actions/Search";

const Search = () => {
  let searchInputRef = null;
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.User);
  const [searchText, onChangeText] = React.useState(null);

  const onSearch = (searchText) => {
    spotifyApi
      .searchArtist(searchText, login.spotifyToken.access_token)
      .then((results) => {
        dispatch(setSearchResultsAction(results));
      });
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
            top: 5,
            left: 5,
            borderRadius: 10,
          }}
        />

        <Entypo
          name="spotify"
          size={32}
          style={{ color: colors.solid.green, width: 50 }}
        />
      </View>

      <TextInput
        ref={(ref) => {
          searchInputRef = ref;
        }}
        style={{ height: 40, width: "60%" }}
        onChangeText={(text) => onChangeText(text)}
        value={searchText}
        placeholder="Search for music"
        placeholderTextColor={colors.text.default}
        onBlur={() => onSearch(searchText)}
        selectTextOnFocus
      />

      <TouchableOpacity onPress={() => searchInputRef.blur()}>
        <EvilIcons name="search" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
