import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Linking, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Audio } from "expo-av";
import qs from "query-string";

import Login from "./Screens/Login";
import Playlist from "./Screens/Playlist";
import Player from "./Screens/Player";
import MiniPlayer from "./Components/MiniPlayer/MiniPlayer";

import colors from "./constants/colors";
import { getSpotifyToken } from "./api";

import {
  clearMusicDataAction,
  setAudioPlayerAction,
} from "./Redux/Actions/Player";

import { loginAction } from "./Redux/Actions/User";

const Stack = createStackNavigator();

Audio.setAudioModeAsync({
  staysActiveInBackground: false,
  playThroughEarpieceAndroid: false,
});

const App = () => {
  const dispatch = useDispatch();
  const { audioPlayer, musicData } = useSelector((state) => state.Player);

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

    console.log("queryString ", queryString);

    if (queryString.login) {
      if (queryString.login === "spotify") {
        getSpotifyToken(queryString.code, queryString.authBase64).then(
          (spotifyToken) => {
            console.log(">>> spotifyToken", spotifyToken);
            dispatch(loginAction({ ...queryString, spotifyToken }));
          }
        );
      } else {
        dispatch(loginAction(queryString));
      }
    }
  };

  useEffect(() => {
    Linking.addEventListener("url", onDeepLink);

    if (!audioPlayer) {
      console.log(">>> Initializing Audio Player");

      const player = new Audio.Sound();
      player.setOnPlaybackStatusUpdate((playbackStatus) => {
        // this.setState({ playbackStatus });
      });

      dispatch(setAudioPlayerAction(player));
    }
    return () => {
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
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Playlist" component={Playlist} />
            <Stack.Screen name="Player" component={Player} />
          </Stack.Navigator>
        </NavigationContainer>
        <MiniPlayer />
      </SafeAreaView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.app,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default App;
