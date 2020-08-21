import React from "react";
import { LinearGradient } from 'expo-linear-gradient';

import { Cover, ImageCover, Title } from './style';

const ArtistCover = ({ artist }) => {
  const uri =
    artist.images && artist.images.length > 0 ? artist.images[1].url : null;

  const textComponent = (
    <>
      <Title >{artist.name}</Title>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,1)"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 100,
        }}
      />
    </>
  );

  return uri ? (
    <ImageCover source={{ uri }} >
      {textComponent}
    </ImageCover>
  ) : (
    <Cover >{textComponent}</Cover>
  );
};

export default ArtistCover;