import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import moment from "moment";

export default class Header extends React.Component {
  state = {
    trackLength: 300,
    timeElapsed: "0:00",
    timeRemaining: "5:00",
  };

  changeTime = (seconds) => {
    this.setState({ timeElapsed: moment.utc(seconds * 1000).format("m:ss") });
    this.setState({
      timeRemaining: moment
        .utc((this.state.trackLength - seconds) * 1000)
        .format("m:ss"),
    });
  };

  render() {
    return (
      <View
        style={{
          marginHorizontal: 32,
          //margin: 32,
          // borderWidth: 1
        }}
      >
        <Slider
          minimumValue={0}
          maximumValue={this.state.trackLength}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#93A8B3"
          onValueChange={(seconds) => this.changeTime(seconds)}
        ></Slider>
        <View
          style={{
            // marginTop: -12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.textLight, styles.timeStamp]}>
            {this.state.timeElapsed}
          </Text>
          <Text style={[styles.textLight, styles.timeStamp]}>
            {this.state.timeRemaining}
          </Text>
        </View>
      </View>
    );
  }
}
