import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import findIndex from "lodash/findIndex";

import {
  Container,
  Title,
  HeaderRow,
  HeaderCell,
  Row,
  Cell,
  CellSubtitle,
  CellVertical,
  IconIonicons,
  TitleCategory,
} from "./style";

import { playlistSetCurrentTrackAction } from "../../Redux/Actions/Playlist";

const MusicAnimation = require("../../../assets/lottie/2881-music-fly.json");

const PlaylistScreen = ({ isSelectedRoute }) => {
  const dispatch = useDispatch();
  const { playlist, currentTrack } = useSelector((state) => state.Playlist);

  const onPressPlayTrack = (track) => {
    dispatch(playlistSetCurrentTrackAction(track));
  };

  return (
    <Container isSelectedRoute={isSelectedRoute}>
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
                <Cell>{index + 1}</Cell>
                <CellVertical
                  style={{ flexGrow: 1 }}
                  onPress={() => onPressPlayTrack(track)}
                >
                  <Cell>{track.name ? track.name : ""}</Cell>
                  <CellSubtitle>
                    {track.artists ? track.artists[0].name : ""} -{" "}
                    {track.album ? track.album.name : ""}
                  </CellSubtitle>
                </CellVertical>
                <TouchableOpacity onPress={() => {}}>
                  <Cell>
                    <IconIonicons name="ios-close-circle-outline" />
                  </Cell>
                </TouchableOpacity>
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
          <Title>No results</Title>
        </>
      )}
    </Container>
  );
};

export default PlaylistScreen;
