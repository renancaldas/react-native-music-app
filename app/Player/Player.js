import React, { useEffect, useContext } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { AppContext } from "../contexts/AppContext";

import { youtubeUrl } from '../api';

const Player = () => {
  const {
    user,
    isOrientationVertical,
    playlist,
    selectedIndexTrack,
    sound,
    playerStatus,
    setRoute,
    setSelectedIndexTrack,
    setSound,
    setPlayerStatus,
    setLoading
  } = useContext(AppContext);


  useEffect(() => {
    if (!user) {
      setRoute('/login');
    }

    return sound
      ? () => {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
      : undefined;
  }, [user, sound]);

  const loadTrack = async (index) => {
    console.log("Loading track: ", playlist[index].youtubeId);
    setLoading(true);

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const sound = new Audio.Sound();
      await sound.loadAsync({ uri: `${youtubeUrl}/stream?id=${playlist[index].youtubeId}` });
      sound.setOnPlaybackStatusUpdate(setPlayerStatus);
      setSound(sound);

      console.log("Playing Sound");
      setLoading(false);

      await sound.playAsync();
    } catch (ex) {
      console.log(ex);
      setLoading(false);
    }
  }

  const onPressPlay = async () => {
    loadTrack(selectedIndexTrack);
  };

  const onPressPause = async () => {
    await sound.pauseAsync();
  };

  const onPressBack = async () => {
    if (selectedIndexTrack > 0) {
      const index = selectedIndexTrack - 1;
      setSelectedIndexTrack(index);
      await sound.unloadAsync();
      await loadTrack(index);
    }
  }

  const onPressForward = async () => {
    if (selectedIndexTrack < playlist.length - 1) {
      const index = selectedIndexTrack + 1;
      setSelectedIndexTrack(index);
      await sound.unloadAsync();
      await loadTrack(index);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: isOrientationVertical ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Image
        style={{
          height: 300,
          width: 300,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
        }}
        source={{ uri: playlist[selectedIndexTrack].album.images[0].url }}
      />

      {isOrientationVertical ? (
        <>
          <Text style={{ color: "white", fontSize: 28 }}>
            {playlist[selectedIndexTrack].name}
          </Text>
          <Text style={{ color: "lightgrey", fontSize: 16 }}>
            {`${playlist[selectedIndexTrack].album.name} - ${playlist[selectedIndexTrack].artists[0].name}`}
          </Text>

          {playerStatus && (
            <Slider
              style={{ width: 350, height: 40 }}
              minimumValue={0}
              value={playerStatus.positionMillis}
              maximumValue={playerStatus.playableDurationMillis}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onSlidingComplete={(positionMillis) =>
                sound.setPositionAsync(positionMillis)
              }
            />
          )}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: 300,
            }}
          >
            <TouchableOpacity onPress={onPressBack}>
              <Ionicons
                name="md-play-skip-back"
                size={40}
                style={{ color: "white" }}

              />
            </TouchableOpacity>

            {playerStatus && playerStatus.isPlaying ? (
              <TouchableOpacity onPress={onPressPause}>
                <Ionicons
                  name="md-pause"
                  size={70}

                  style={{ color: "white" }}
                />
              </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={onPressPlay}>
                  <Ionicons
                    name="md-play"
                    size={70}

                    style={{ color: "white" }}
                  />
                </TouchableOpacity>
              )}


            <TouchableOpacity onPress={onPressForward}>
              <Ionicons
                name="md-play-skip-forward"
                size={40}
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
          <View
            style={{
              flex: 1,
              height: '100%',
              flexDirection: 'column',
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ color: "white", fontSize: 28 }}>
              {playlist[selectedIndexTrack].name}
            </Text>
            <Text style={{ color: "lightgrey", fontSize: 16 }}>
              {`${playlist[selectedIndexTrack].album.name} - ${playlist[selectedIndexTrack].artists[0].name}`}
            </Text>

            {sound && playerStatus && (
              <Slider
                style={{ width: 350, height: 40 }}
                minimumValue={0}
                value={playerStatus.positionMillis}
                maximumValue={playerStatus.playableDurationMillis}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onSlidingComplete={(positionMillis) =>
                  sound.setPositionAsync(positionMillis)
                }
              />
            )}

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: 300,
              }}
            >
              <TouchableOpacity onPress={onPressBack}>
                <Ionicons
                  name="md-play-skip-back"
                  size={40}
                  style={{ color: "white" }}
                />
              </TouchableOpacity>

              {playerStatus && playerStatus.isPlaying ? (
                <TouchableOpacity onPress={onPressPause}>
                  <Ionicons
                    name="md-pause"
                    size={70}
                    style={{ color: "white" }}
                  />
                </TouchableOpacity>
              ) : (
                  <TouchableOpacity onPress={onPressPlay}>
                    <Ionicons
                      name="md-play"
                      size={70}
                      style={{ color: "white" }}
                    />
                  </TouchableOpacity>
                )}

              <TouchableOpacity onPress={onPressForward}>
                <Ionicons
                  name="md-play-skip-forward"
                  size={40}
                  style={{ color: "white" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
    </View>
  );
};

export default Player;
