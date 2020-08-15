import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";

import { searchByQuery } from "../api";
import { setSearchResultsAction, selectItemAction } from '../Redux/Actions/Playlist';

import Search from "../Components/Search/Search";
import List from "../Components/Playlist/Playlist";

const Playlist = ({ route, navigation, text }) => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.Playlist);

  const onSearch = (searchText) => {
    searchByQuery(searchText).then((results) => {
      dispatch(setSearchResultsAction(results));
    });
  };

  const onPressItem = (item) => {
    dispatch(selectItemAction(item));
    navigation.navigate("Player");
  };

  return (
    <View
      style={{
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Search onSearch={(searchText) => onSearch(searchText)} />
      <List items={searchResults.items} onPressItem={onPressItem} />
    </View>
  );
};

export default Playlist;