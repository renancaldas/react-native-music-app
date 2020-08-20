import React from "react";
import { useSelector } from "react-redux";
import { ActivityIndicator, ScrollView } from "react-native";
import LottieView from "lottie-react-native";

import { Container, Title, TitleCategory, Row, RowTitle } from "./style";
import Search from "./SearchInput/SearchInput";
// import List from "./Playlist/Playlist";
import Carousel from "./Carousel/Carousel";

const MusicAnimation = require("../../../assets/lottie/2881-music-fly.json");

const SearchScreen = () => {
  const { searchResults } = useSelector(
    (state) => state.Search
  );

  return (
    <Container>
      <Search />

      {/* <ActivityIndicator size="large" /> */}
      
      {searchResults && searchResults.artists ? (
        <ScrollView>
          <TitleCategory>Artists</TitleCategory>
          <Carousel items={searchResults.artists.items} />

          {/* <TitleCategory>Albums</TitleCategory>
          <Carousel items={searchResults.albums.items} />

          <TitleCategory>Tracks</TitleCategory>
          <>
            {searchResults.tracks.items.map((item) => (
              <Row>
              <RowTitle>{item.track_number}</RowTitle>
                <RowTitle>{item.name}</RowTitle>
                <RowTitle>{item.album.name}</RowTitle>
              </Row>
            ))}
          </> */}
        </ScrollView>
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
    </Container>
  );
};

export default SearchScreen;
