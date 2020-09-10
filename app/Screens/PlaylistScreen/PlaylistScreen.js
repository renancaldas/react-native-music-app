import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LottieView from "lottie-react-native";

import {
  Container,
  NoResults,
  HeaderRow,
  HeaderCell,
  Row,
  Title,
  TitleScroll,
  Subtitle,
  RowCell,
  IconIonicons,
  TitleCategory,
} from "./style";

import {
  playlistSetCurrentTrackAction,
  playlistRemoveTrackAction,
} from "../../Redux/Actions/Playlist";

const MusicAnimation = require("../../../assets/lottie/2881-music-fly.json");

const PlaylistScreen = () => {
  const dispatch = useDispatch();
  const { playlist, currentTrack } = useSelector((state) => state.Playlist);

  const onPressPlayTrack = (track) => {
    dispatch(playlistSetCurrentTrackAction(track));
  };

  const onPressRemoveTrack = (track) => {
    dispatch(playlistRemoveTrackAction(track));
  };

  return (
    <Container>
      <TitleCategory>Playlist</TitleCategory>
      {playlist.length > 0 ? (
        <>
          <HeaderRow>
            <HeaderCell>#</HeaderCell>
            <HeaderCell>Track</HeaderCell>
          </HeaderRow>
          <ScrollView>
            {playlist.map((track, index) => (
              <Row
                key={track.id}
                style={{
                  backgroundColor:
                    currentTrack && currentTrack.id === track.id
                      ? "black"
                      : "transparent",
                }}
              >
                <RowCell
                  style={{
                    alignItems: "center",
                    width: "6%",
                  }}
                >
                  <Title>{index + 1}</Title>
                </RowCell>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    marginHorizontal: 5,
                  }}
                  onPress={() => onPressPlayTrack(track)}
                >
                  <RowCell>
                    <TitleScroll
                      duration={20000}
                      loop
                      animationType="scroll"
                      repeatSpacer={10}
                      marqueeDelay={1000}
                    >
                      {track.name ? track.name : ""}
                    </TitleScroll>

                    <Subtitle>
                      {track.artists ? track.artists[0].name : ""} -{" "}
                      {track.album ? track.album.name : ""}
                    </Subtitle>
                  </RowCell>
                </TouchableOpacity>
                <RowCell
                  style={{
                    alignItems: "center",
                    width: "10%",
                  }}
                >
                  <TouchableOpacity onPress={() => onPressRemoveTrack(track)}>
                    <IconIonicons name="ios-close-circle-outline" />
                  </TouchableOpacity>
                </RowCell>
              </Row>
            ))}
          </ScrollView>
        </>
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
          <NoResults>No results</NoResults>
        </>
      )}
    </Container>
  );
};

export default PlaylistScreen;
