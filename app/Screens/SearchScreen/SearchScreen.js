import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import sortBy from "lodash/sortBy";
import uniqBy from "lodash/uniqBy";

import { Container, Title, TitleCategory, Row, RowTitle } from "./style";
import Search from "./SearchInput/SearchInput";
// import List from "./Playlist/Playlist";
import Carousel from "./Carousel/Carousel";

import spotifyApi from "../../api/spotify";
import { setAlbumsAction, setTracksAction } from "../../Redux/Actions/Search";

const MusicAnimation = require("../../../assets/lottie/2881-music-fly.json");

const SearchScreen = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.User);
  const { artistResponse, albumResponse, trackResponse } = useSelector(
    (state) => state.Search
  );

  const onChangeArtist = (artist) => {
    console.log(">>>> onChangeArtist ", artist);

    spotifyApi
      .getAlbumsByArtistId(artist.id, login.spotifyToken.access_token)
      .then((albumResults) => {
        dispatch(setAlbumsAction(albumResults));

        if (albumResults.items.length > 0) {
          spotifyApi
            .getTracksByAlbumId(
              albumResults.items[0].id,
              login.spotifyToken.access_token
            )
            .then((results) => {
              dispatch(setTracksAction(results));
            });
        }
      });
  };

  const onChangeAlbum = (album) => {
    console.log(">>>> onChangeAlbum ", album);

    spotifyApi
      .getTracksByAlbumId(album.id, login.spotifyToken.access_token)
      .then((results) => {
        dispatch(setTracksAction(results));
      });
  };

  return (
    <Container>
      <Search />

      {/* <ActivityIndicator size="large" /> */}

      {artistResponse ? (
        <ScrollView>
          {artistResponse && (
            <>
              <TitleCategory>Artists</TitleCategory>
              <Carousel
                items={artistResponse.items}
                onChange={onChangeArtist}
              />
            </>
          )}

          {albumResponse && (
            <>
              <TitleCategory>Albums</TitleCategory>
              <Carousel
                items={uniqBy(albumResponse.items, "id")}
                onChange={onChangeAlbum}
              />
            </>
          )}

          {trackResponse && (
            <>
              <TitleCategory>Tracks</TitleCategory>
              {sortBy(trackResponse.items, ["disc_number"]).map((track) => (
                <Row key={track.id}>
                  <RowTitle>{track.track_number}</RowTitle>
                  <RowTitle>{track.name ? track.name : ""}</RowTitle>
                </Row>
              ))}
            </>
          )}
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
