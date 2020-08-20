import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../constants/colors";

import { searchByQuery } from "../../api";
import {
  setSearchResultsAction,
  setSearchLoadingAction,
} from "../../Redux/Actions/Search";

import Search from "./SearchInput";
import List from "./Playlist";
import { Container, ViewCenter, Title } from "./style";

const MusicAnimation = require("../../../assets/lottie/2881-music-fly.json");

const SearchScreen = ({ route, navigation, text }) => {
  const dispatch = useDispatch();
  const { searchResults, isSearchLoading } = useSelector(
    (state) => state.Search
  );

  const onSearch = (searchText) => {
    dispatch(setSearchLoadingAction(true));
    searchByQuery(searchText).then((results) => {
      dispatch(setSearchLoadingAction(false));
      dispatch(setSearchResultsAction(results));
    });
  };

  return (
    <Container>
      <Search onSearch={(searchText) => onSearch(searchText)} />
      <ViewCenter>
        {isSearchLoading ? (
          <ActivityIndicator size="large" />
        ) : searchResults.length > 0 ? (
          <List items={searchResults} />
        ) : (
          <>
            <LottieView
              source={MusicAnimation}
              autoPlay
              loop
              style={{
                width: "100%",
              }}
            />
            <Title>No results</Title>
          </>
        )}
      </ViewCenter>
    </Container>
  );
};

export default SearchScreen;
