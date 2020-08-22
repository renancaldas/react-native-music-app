import React, { useEffect, useRef } from "react";
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
  setPlaybackStatusAction,
} from "./Redux/Actions/Player";

import { loginAction } from "./Redux/Actions/User";

Audio.setAudioModeAsync({
  staysActiveInBackground: false,
  playThroughEarpieceAndroid: false,
});

const player = new Audio.Sound();


const App = () => {
  const dispatch = useDispatch();
  const { audioPlayer, playbackStatus, currentTrackData } = useSelector(
    (state) => state.Player
  );
  const { currentRoute, routes } = useSelector((state) => state.App);

  const [loaded] = useFonts({
    SatisfyRegular: require("../assets/fonts/Satisfy-Regular.ttf"),
  });

  player.setOnPlaybackStatusUpdate((playbackStatus) =>
    dispatch(setPlaybackStatusAction(playbackStatus))
  );

  if(!audioPlayer) {
    dispatch(setAudioPlayerAction(player));
  } else {
    audioPlayer.getStatusAsync().then((status) => {
      console.log('>>> status', status)
      if (!playbackStatus.isLoaded) {
        if(currentTrackData) {
          console.log('>>>> load music!', playbackStatus);
          audioPlayer.loadAsync(currentTrackData).then(() => {
            console.log('>>>> music loaded successfully!');
          })
        } else {
          console.log('>>>> select a track!');
        }
      }
    })
    
  }
  
  // Deep link effect
  useEffect(() => {
    function onDeepLink({ url }) {
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
                dispatch(
                  loginAction({ ...queryString, spotifyToken, userData })
                );
              });
          });
      }
    }

    Linking.addEventListener("url", onDeepLink);
    return function cleanup() {
      Linking.removeEventListener("url", onDeepLink);
    };
  });

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
