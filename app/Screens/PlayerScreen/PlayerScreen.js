import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import findIndex from "lodash/findIndex";

import Slider from "./Slider/Slider";
import AlbumCover from "./AlbumCover/AlbumCover";
import Carousel from "./Carousel/Carousel";
import {
  Container,
  TitleWrapper,
  Title,
  Subtitle,
  Cover,
  Controls,
  BackButton,
  PlayButton,
  ForwardButton,
} from "./style";

import { playlistSetCurrentTrackAction } from "../../Redux/Actions/Playlist";

const PlayerScreen = () => {
  const dispatch = useDispatch();
  const { playlist, currentTrack } = useSelector((state) => state.Playlist);
  const { audioPlayer, playbackStatus } = useSelector((state) => state.Player);

  const currentTrackIndex = findIndex(
    playlist,
    (item) => item.id === currentTrack.id
  );

  const onChangeTrack = (track) => {
    dispatch(playlistSetCurrentTrackAction(track));
  };

  const onBackward = () => {
    if (currentTrackIndex > 0) {
      dispatch(playlistSetCurrentTrackAction(playlist[currentTrackIndex - 1]));
    }
  };

  const onPlay = () => {
    audioPlayer.playAsync();
  };

  const onPause = () => {
    audioPlayer.pauseAsync();
  };

  const onForward = () => {
    if (currentTrackIndex < playlist.length - 1) {
      dispatch(playlistSetCurrentTrackAction(playlist[currentTrackIndex + 1]));
    }
  };

  const onSetPosition = (millis) => {
    audioPlayer.setPositionAsync(millis);
  };

  return (
    <Container>
      <Cover>
        <Carousel
          items={playlist}
          onChange={onChangeTrack}
          renderItem={({ item }) => <AlbumCover album={item.album} />}
          currentIndex={currentTrackIndex}
        />
      </Cover>

      <TitleWrapper>
        <Title>{currentTrack ? currentTrack.name : ""}</Title>
        <Subtitle>{currentTrack ? currentTrack.artists[0].name : ""}</Subtitle>
      </TitleWrapper>

      {playbackStatus && (
        <>
          <Slider
            disabled={!playbackStatus.isLoaded}
            durationMillis={playbackStatus.durationMillis}
            positionMillis={playbackStatus.positionMillis}
            setPosition={onSetPosition}
            width="90%"
          />
          <Controls>
            <TouchableOpacity onPress={onBackward}>
              <BackButton name="backward" />
            </TouchableOpacity>
            {!playbackStatus.isLoaded ? (
              <ActivityIndicator size="large" />
            ) : playbackStatus.isPlaying ? (
              <TouchableOpacity onPress={onPause}>
                <PlayButton name="pause" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onPlay}>
                <PlayButton name="play" />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={onForward}>
              <ForwardButton name="forward" />
            </TouchableOpacity>
          </Controls>
        </>
      )}
    </Container>
  );
};

export default PlayerScreen;
