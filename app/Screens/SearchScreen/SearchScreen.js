import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import orderBy from "lodash/orderBy";
import uniqBy from "lodash/uniqBy";
import findIndex from "lodash/findIndex";

import {
  Container,
  Title,
  TitleCategory,
  HeaderRow,
  HeaderCell,
  Row,
  Cell,
  IconIonicons
} from "./style";
import Search from "./SearchInput/SearchInput";
// import List from "./Playlist/Playlist";
import Carousel from "./Carousel/Carousel";

import ArtistCover from "./ArtistCover/ArtistCover";
import AlbumCover from "./AlbumCover/AlbumCover";

import spotifyApi from "../../api/spotify";
import { setAlbumsAction, setTracksAction } from "../../Redux/Actions/Search";
import { playlistAddTrackAction, playlistRemoveTrackAction } from "../../Redux/Actions/Playlist";

const MusicAnimation = require("../../../assets/lottie/2881-music-fly.json");

const SearchScreen = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.User);
  const { artistResponse, albumResponse, trackResponse } = useSelector(
    (state) => state.Search
  );
  const { playlist } = useSelector((state) => state.Playlist);

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

  const onPressTrack = (track) => {
    const index = findIndex(playlist, item => item.id === track.id);
    if (index === -1) {
      dispatch(playlistAddTrackAction(track));
    } else {
      dispatch(playlistRemoveTrackAction(playlist[index]));
    }
  }

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
                renderItem={({ item }) => <ArtistCover artist={item} />}
              />
            </>
          )}

          {albumResponse && (
            <>
              <TitleCategory>Albums</TitleCategory>
              <Carousel
                items={orderBy(
                  uniqBy(albumResponse.items, "name"),
                  "release_date",
                  "desc"
                )}
                onChange={onChangeAlbum}
                renderItem={({ item }) => <AlbumCover album={item} />}
              />
            </>
          )}

          {trackResponse && (
            <>
              <HeaderRow>
                <HeaderCell>#</HeaderCell>
                <HeaderCell>Track</HeaderCell>
              </HeaderRow>
              {orderBy(trackResponse.items, ["disc_number"]).map((track) => (
                <Row key={track.id} onPress={() => onPressTrack(track)}>
                  <Cell>{track.track_number}</Cell>
                  <Cell style={{ flexGrow: 1 }}>
                    {track.name ? track.name : ""}
                  </Cell>
                  <Cell>
                    <IconIonicons name={findIndex(playlist, item => item.id === track.id) === -1? "ios-add-circle-outline" : "ios-add-circle"} />
                  </Cell>
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
