import React, { useEffect, useState } from "react";
import { Image, requireNativeComponent, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

const tracks = [
  {
    id: 1,
    name: "Pause Theme",
    artist: "Final Fantasy",
    album: "FFXV",
    uri: "https://storage.cloudconvert.com/tasks/9929b910-7959-4b93-a9ae-1b0a7e5ddfc8/ffxv_pause_theme.mp3?AWSAccessKeyId=cloudconvert-production&Expires=1611687799&Signature=Rip7mpUfpWYVw3HYIKwyxX5GXcQ%3D&response-content-disposition=inline%3B%20filename%3D%22ffxv_pause_theme.mp3%22&response-content-type=audio%2Fmpeg",
    cover: "ffxv_cover.jpeg",
  },
  {
    id: 2,
    name: "Stand Your Ground",
    artist: "Final Fantasy",
    album: "FFXV",
    uri: "https://storage.cloudconvert.com/tasks/e6200c40-c03e-4033-9281-656a981a1be3/ffxv_stand_your_ground.mp3?AWSAccessKeyId=cloudconvert-production&Expires=1611683485&Signature=dGE3O1TmOlglaRZxAQT3yvQBYaE%3D&response-content-disposition=inline%3B%20filename%3D%22ffxv_stand_your_ground.mp3%22&response-content-type=audio%2Fmpeg",
    cover: "ffxv_cover.jpeg",
  },
  {
    id: 3,
    name: "Daemons",
    artist: "Final Fantasy",
    album: "FFXV",
    uri: "https://storage.cloudconvert.com/tasks/3d531b28-35f9-45e7-ae94-c43d40fef607/ffxv_daemons.mp3?AWSAccessKeyId=cloudconvert-production&Expires=1611683894&Signature=Ka3d4B%2F91OIPqawqfZ8edSxSOAg%3D&response-content-disposition=inline%3B%20filename%3D%22ffxv_daemons.mp3%22&response-content-type=audio%2Fmpeg",
    cover: "ffxv_cover.jpeg",
  },
];

const Player = () => {
  const [selectedIndexTrack, setSelectedIndexTrack] = useState(0);
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
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(190,110,110,1)", "rgba(46,43,79,1)"]}
        style={{
          flex: 1,
          paddingTop: 50,
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {/* Header */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 28 }}> Now Playing </Text>
        </View>

        {/* Content */}
        <View
          style={{
            flex: 8,
            alignItems: "center",
            justifyContent: "space-around",
            padding: 50,
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
            source={require(`../assets/ffxv_cover.jpeg`)}
          />

          <Text style={{ color: "white", fontSize: 28 }}>
            {" "}
            {tracks[selectedIndexTrack].name}{" "}
          </Text>
          <Text style={{ color: "lightgrey", fontSize: 16 }}>
            {" "}
            {tracks[selectedIndexTrack].album} -{" "}
            {tracks[selectedIndexTrack].artist}{" "}
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

        {/* Footer */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Ionicons name="home" size={32} style={{ color: "grey" }} />
          <Ionicons name="search" size={32} style={{ color: "grey" }} />
          <Ionicons name="list" size={32} style={{ color: "grey" }} />
          <Ionicons
            name="md-play-circle-outline"
            size={32}
            style={{ color: "white" }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Player;
