import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Audio } from "expo-av";

// import Login from "./Screens/Login";
import Playlist from "./Screens/Playlist";
import Player from "./Screens/Player";
import MiniPlayer from "./Components/MiniPlayer/MiniPlayer";

import colors from "./constants/colors";

import {
  clearMusicDataAction,
  setAudioPlayerAction,
} from "./Redux/Actions/Player";

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

  useEffect(() => {
    if (!audioPlayer) {
      console.log(">>> Initializing Audio Player");

      const player = new Audio.Sound();
      player.setOnPlaybackStatusUpdate((playbackStatus) => {
        // this.setState({ playbackStatus });
      });

      dispatch(setAudioPlayerAction(player));
    }
    return () => {
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
            {/*<Stack.Screen name="Login" component={Login}/>*/}
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
