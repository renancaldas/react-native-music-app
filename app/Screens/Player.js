import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Button } from "react-native";

import { getYoutubeVideoDataById } from "../api";
import {
  setMusicDataAction,
} from "../Redux/Actions/Player";

import MusicPlayer from "../Components/Player/Player";

const Player = ({ route, navigation, text }) => {

  const dispatch = useDispatch();
  const { selectedItem } = useSelector((state) => state.Playlist);
  const { musicData } = useSelector((state) => state.Player);

  if (!musicData && selectedItem) {
    getYoutubeVideoDataById(selectedItem.id.videoId).then((data) => {
      dispatch(setMusicDataAction(data));
    });
  } 

  return (
    musicData && (
      <MusicPlayer
        navigation={navigation}
      />
    )
  );
};

export default Player;
