import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";

import { searchByQuery, getYoutubeVideoDataById } from "../api";
import {
  setSearchResultsAction,
  selectItemAction,
} from "../Redux/Actions/Playlist";
import { setMusicDataAction } from "../Redux/Actions/Player";

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

  const loadMusicData = (selectedItem) => {
    getYoutubeVideoDataById(selectedItem.id.videoId).then((data) => {
      dispatch(setMusicDataAction(data));
    });
  };

  const onPressItem = (selectedItem) => {
    dispatch(selectItemAction(selectedItem));
    loadMusicData(selectedItem);
    // navigation.navigate("Player");
  };

  return (
    <View
      style={{
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: 10,
      }}
    >
      <View style={{ marginBottom: 5 }}>
        <Search onSearch={(searchText) => onSearch(searchText)} />
      </View>

      <List items={searchResults.items} onPressItem={onPressItem} />
    </View>
  );
};

export default Playlist;
