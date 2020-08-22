import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Slider from "./Slider/Slider";
import AlbumCover from "./AlbumCover/AlbumCover";
import Carousel from "./Carousel/Carousel";
import { Container, FullWidth, Title, Controls } from "./style";

const PlayerScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { playlist, currentTrack } = useSelector((state) => state.Playlist);
  console.log(">>> playlist, currentTrack", playlist, currentTrack);

  const onChangeTrack = (track) => {
    console.log('>>> onChangeTrack', onChangeTrack);
  }

  return (
    <Container>
      <Title>test</Title>
      {/* <Carousel
        items={playlist}
        onChange={onChangeTrack}
        renderItem={({ track }) => <AlbumCover album={track} />}
      /> */}
      <Title></Title>
      <>
        <FullWidth>
          <Slider
            durationMillis={1000}
            positionMillis={0}
            setPosition={() => {}}
          />
        </FullWidth>
        <Controls>
          <Title>test</Title>
          <Title>test</Title>
          <Title>test</Title>
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
