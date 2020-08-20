import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Linking } from "react-native";
import { useFonts } from "expo-font";
import { Audio } from "expo-av";
import qs from "query-string";

import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import SearchScreen from "./Screens/SearchScreen/SearchScreen";
import PlaylistScreen from "./Screens/PlaylistScreen/PlaylistScreen";
import PlayerScreen from "./Screens/PlayerScreen/PlayerScreen";
import MiniPlayer from "./Components/MiniPlayer/MiniPlayer";
import Tabs from "./Components/Tabs/Tabs";

import { AppContainer, ViewWrapper, TabWrapper } from "./styles";

import * as apiSpotify from "./api/spotify";

import {
  clearMusicDataAction,
  setAudioPlayerAction,
} from "./Redux/Actions/Player";

import { loginAction } from "./Redux/Actions/User";


Audio.setAudioModeAsync({
  staysActiveInBackground: false,
  playThroughEarpieceAndroid: false,
});

const App = () => {
  const dispatch = useDispatch();
  const { audioPlayer, musicData } = useSelector((state) => state.Player);
  const { currentRoute, routes } = useSelector((state) => state.App);

  const [loaded] = useFonts({
    SatisfyRegular: require("../assets/fonts/Satisfy-Regular.ttf"),
  });

  const loadMusic = () => {
    if (musicData) {
      audioPlayer.loadAsync({
        uri: musicData.sourceList.filter(
          (source) => source.hasAudio && source.hasVideo
        )[0].url,
      });
    } else {
      alert("Cannot load music: musicData is not initialized!");
    }
  };

  const onDeepLink = ({ url }) => {
    console.log("[onDeepLink] ", url);
    const queryString =
      url.indexOf("?") !== -1 ? qs.parse(url.split("?")[1]) : null;

    if (queryString.login) {
      apiSpotify
        .getToken(queryString.code, queryString.authBase64)
        .then((spotifyToken) => {
          apiSpotify.getUserInfo(spotifyToken.access_token).then((userData) => {
            dispatch(loginAction({ ...queryString, spotifyToken, userData }));
          });
        });
    }
  };

  useEffect(() => {
    Linking.addEventListener("url", onDeepLink);

    // Load player
    if (!audioPlayer) {
      const player = new Audio.Sound();
      player.setOnPlaybackStatusUpdate((playbackStatus) => {
        // this.setState({ playbackStatus });
      });

      dispatch(setAudioPlayerAction(player));
    }

    return () => {
      // Clear on unmount
      Linking.removeEventListener("url", onDeepLink);

      if (audioPlayer) {
        audioPlayer.unloadAsync();
        dispatch(clearMusicDataAction());
        dispatch(setAudioPlayerAction(null));
      }
    };
  }, [audioPlayer]);

  return (
    loaded && (
      <AppContainer>
        <ViewWrapper>
          {currentRoute === routes.login && <LoginScreen />}
          {currentRoute === routes.search && <SearchScreen />}
          {currentRoute === routes.profile && <ProfileScreen />}
          {currentRoute === routes.playlist && <PlaylistScreen />}
          {currentRoute === routes.player && <PlayerScreen />}
        </ViewWrapper>
        {currentRoute !== routes.login && (
          <TabWrapper>
            <Tabs />
          </TabWrapper>
        )}

        {/* <MiniPlayer /> */}
      </AppContainer>
    )
  );
};

export default App;
