import React from "react";
import { View } from "react-native";
import { Audio } from "expo-av";

import Header from "./Header";
import Cover from "./Cover";
import Album from "./Album";
import Slider from "./Slider";
import Control from "./Control";

Audio.setAudioModeAsync({
  staysActiveInBackground: true,
});

class Player extends React.Component {
  state = {
    isReady: false,
    playbackStatus: null,
  };

  componentDidMount() {
    // Player setup
    this.soundObject = new Audio.Sound();
    this.soundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
      this.setState({ playbackStatus });
    });

    // Load music
    const uri = this.props.musicData.sourceList.filter(
      (source) => source.hasAudio && source.hasVideo
    )[0].url;

    this.soundObject.loadAsync({ uri }).then(() => {
      console.log("Loaded url:", uri);
      this.setState({ isReady: true });
    });
  }

  render() {
    const { musicData } = this.props;
    const { playbackStatus } = this.state;

    return (
      musicData && (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flex: 3,
              justifyContent: "center",
            }}
          >
            <Header />
            <Cover thumbs={musicData.thumbs} />
            <Album author={musicData.author} title={musicData.title} />
          </View>

          <View
            style={{
              flex: 1.5,
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Slider
              durationMillis={
                playbackStatus ? playbackStatus.durationMillis : 0
              }
              positionMillis={
                playbackStatus ? playbackStatus.positionMillis : 0
              }
              setPosition={(miliseconds) =>
                this.soundObject.setPositionAsync(miliseconds)
              }
            />

            <Control
              play={() => this.soundObject.playAsync()}
              pause={() => this.soundObject.pauseAsync()}
              isPlaying={playbackStatus ? playbackStatus.isPlaying : false}
            />
          </View>
        </View>
      )
    );
  }
}

export default Player;
