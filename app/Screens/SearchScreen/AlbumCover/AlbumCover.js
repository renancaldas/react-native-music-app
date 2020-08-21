import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Cover, ImageCover, Title, YearTitle } from "./style";

const AlbumCover = ({ album }) => {
  const uri =
    album.images && album.images.length > 0 ? album.images[1].url : null;

  const year = album.release_date.split("-")[0];

  const textComponent = (
    <>
      <YearTitle>{year}</YearTitle>
      <Title>{album.name}</Title>
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
    <ImageCover source={{ uri }}>{textComponent}</ImageCover>
  ) : (
    <Cover>{textComponent}</Cover>
  );
};

export default AlbumCover;
