import React, { useEffect, useState, useContext } from "react";
import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { AppContext } from "../../AppContext";

const Player = () => {
  const {
    isOrientationVertical,
    tracks,
    selectedIndexTrack,
    setSelectedIndexTrack,
  } = useContext(AppContext);

  console.log(">>> isOrientationVertical", isOrientationVertical);

  const [sound, setSound] = useState();
  const [status, setStatus] = useState();

  const playSound = async () => {
    console.log("Loading Sound");

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    const sound = new Audio.Sound();

    await sound.loadAsync({ uri: tracks[selectedIndexTrack].uri });

    sound.setOnPlaybackStatusUpdate(setStatus);

    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  };

  const pauseSound = async () => {
    await sound.pauseAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
        source={require(`../../assets/ffxv_cover.jpeg`)}
      />

      {isOrientationVertical ? (
        <>
          <Text style={{ color: "white", fontSize: 28 }}>
            {tracks[selectedIndexTrack].name}
          </Text>
          <Text style={{ color: "lightgrey", fontSize: 16 }}>
            {tracks[selectedIndexTrack].album} -
            {tracks[selectedIndexTrack].artist}
          </Text>

          {status && (
            <Slider
              style={{ width: 350, height: 40 }}
              minimumValue={0}
              value={status.positionMillis}
              maximumValue={status.playableDurationMillis}
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
            <Ionicons
              name="md-play-skip-back"
              size={40}
              style={{ color: "white" }}
              onPress={() => {
                if (selectedIndexTrack > 0) {
                  setSelectedIndexTrack(selectedIndexTrack - 1);
                }
              }}
            />

            {status && status.isPlaying ? (
              <Ionicons
                name="md-pause"
                size={70}
                onPress={pauseSound}
                style={{ color: "white" }}
              />
            ) : (
              <Ionicons
                name="md-play"
                size={70}
                onPress={playSound}
                style={{ color: "white" }}
              />
            )}

            <Ionicons
              name="md-play-skip-forward"
              size={40}
              style={{ color: "white" }}
              onPress={() => {
                if (selectedIndexTrack < tracks.length - 1) {
                  setSelectedIndexTrack(selectedIndexTrack + 1);
                }
              }}
            />
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
            {tracks[selectedIndexTrack].name}
          </Text>
          <Text style={{ color: "lightgrey", fontSize: 16 }}>
            {tracks[selectedIndexTrack].album} -
            {tracks[selectedIndexTrack].artist}
          </Text>

          {status && (
            <Slider
              style={{ width: 350, height: 40 }}
              minimumValue={0}
              value={status.positionMillis}
              maximumValue={status.playableDurationMillis}
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
            <Ionicons
              name="md-play-skip-back"
              size={40}
              style={{ color: "white" }}
              onPress={() => {
                if (selectedIndexTrack > 0) {
                  setSelectedIndexTrack(selectedIndexTrack - 1);
                }
              }}
            />

            {status && status.isPlaying ? (
              <Ionicons
                name="md-pause"
                size={70}
                onPress={pauseSound}
                style={{ color: "white" }}
              />
            ) : (
              <Ionicons
                name="md-play"
                size={70}
                onPress={playSound}
                style={{ color: "white" }}
              />
            )}

            <Ionicons
              name="md-play-skip-forward"
              size={40}
              style={{ color: "white" }}
              onPress={() => {
                if (selectedIndexTrack < tracks.length - 1) {
                  setSelectedIndexTrack(selectedIndexTrack + 1);
                }
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Player;
