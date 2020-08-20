import React from "react";
import { useSelector } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import LottieView from "lottie-react-native";

import Search from "./SearchInput/SearchInput";
import List from "./Playlist/Playlist";
import { Container, Filters, ViewCenter, Title, Text } from "./style";

const MusicAnimation = require("../../../assets/lottie/2881-music-fly.json");

const SearchScreen = () => {
  const { searchResults, isSearchLoading } = useSelector(
    (state) => state.Search
  );

  return (
    <Container>
      <Search />
      <Filters>
        <Text>Artist</Text>
        <Text>Albums</Text>
        <Text>Songs</Text>
        <Text>Playlists</Text>
      </Filters>
      <ViewCenter>
        {isSearchLoading ? (
          <ActivityIndicator size="large" />
        ) : searchResults && searchResults.artists ? (
          <List items={searchResults.artists.items} />
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
