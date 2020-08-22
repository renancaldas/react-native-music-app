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
import Tabs from "./Tabs/Tabs";

import { AppContainer, ViewWrapper, TabWrapper } from "./styles";

import spotifyApi from "./api/spotify";

import {
  playerClearAllAction,
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
      
    } else {
      alert("Cannot load music: musicData is not initialized!");
    }
  };

  const onDeepLink = ({ url }) => {
    console.log("[onDeepLink] ", url);
    const queryString =
      url.indexOf("?") !== -1 ? qs.parse(url.split("?")[1]) : null;

    if (queryString.login) {
      spotifyApi
        .getToken(queryString.code, queryString.authBase64)
        .then((spotifyToken) => {
          spotifyApi
            .getUserInfo(spotifyToken.access_token)
            .then((userData) => {
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
      console.log('App will unmount!');

      // Clear on unmount
      Linking.removeEventListener("url", onDeepLink);

      if (audioPlayer) {
        audioPlayer.unloadAsync();
        dispatch(playerClearAllAction());
        dispatch(setAudioPlayerAction(null));
      }
    };
  }, [audioPlayer]);

  return (
    loaded && (
      <AppContainer>
        {currentRoute === routes.login ? (
          <LoginScreen />
        ) : (
          <>
            <ViewWrapper>
              {currentRoute === routes.search && <SearchScreen />}
              {currentRoute === routes.profile && <ProfileScreen />}
              {currentRoute === routes.playlist && <PlaylistScreen />}
              {currentRoute === routes.player && <PlayerScreen />}
            </ViewWrapper>
            <TabWrapper>
              <Tabs />
            </TabWrapper>
          </>
        )}

      </AppContainer>
    )
  );
};

export default App;
