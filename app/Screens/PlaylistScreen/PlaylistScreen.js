import React from "react";
import { ScrollView } from "react-native";
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
  IconMaterialIcons,
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
              <Row key={track.id} onPress={() => onPressPlayTrack(track)}>
                <Cell>{index + 1}</Cell>
                <Cell style={{ flexGrow: 1 }}>
                  {track.name ? track.name : ""}
                </Cell>
                <Cell>
                  <IconMaterialIcons
                    name={
                      currentTrack && currentTrack.id === track.id
                        ? "play-circle-filled"
                        : "play-circle-outline"
                    }
                  />
                </Cell>
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
