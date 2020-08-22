import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

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

const PlayerScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { playlist, currentTrack } = useSelector((state) => state.Playlist);
  console.log(">>> playlist, currentTrack", playlist, currentTrack);

  const onChangeTrack = (track) => {
    console.log(">>> onChangeTrack", onChangeTrack);
  };

  return (
    <Container>
      <Cover>
        <Carousel
          items={playlist}
          onChange={onChangeTrack}
          renderItem={({ item }) => <AlbumCover album={item.album} />}
        />
      </Cover>

      <TitleWrapper>
        <Title>{currentTrack.name}</Title>
        <Subtitle>{currentTrack.artists[0].name}</Subtitle>
      </TitleWrapper>

      <>
        <Slider
          durationMillis={1000}
          positionMillis={0}
          setPosition={() => {}}
          width="90%"
        />
        <Controls>
          <BackButton name="backward" />
          <PlayButton name="play" />
          <ForwardButton name="forward" />
        </Controls>
      </>
    </Container>
  );
};

export default PlayerScreen;

// import { getYoutubeVideoDataById } from "../../api";
// import { setMusicDataAction } from "../../Redux/Actions/Player";

/*if (!musicData && selectedItem) {
    getYoutubeVideoDataById(selectedItem.id.videoId).then((data) => {
      dispatch(setMusicDataAction(data));
    });
  } */
