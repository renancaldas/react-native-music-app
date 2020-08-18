import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import moment from "moment";
import TextTicker from "react-native-text-ticker";
import colors from "../../constants/colors";

class SliderComponent extends React.Component {
  state = {
    slidingValue: null,
  };

  getTimeFromMiliseconds(miliseconds) {
    const seconds = miliseconds / 1000;
    return moment(new Date()).startOf("day").seconds(seconds).format("mm:ss");
  }

  onSlidingStart() {
    const { positionMillis } = this.props;
    this.setState({ slidingValue: positionMillis });
  }

  onValueChange(slidingValue) {
    this.setState({ slidingValue });
  }

  onSlidingComplete(value) {
    const { setPosition } = this.props;
    setPosition(value);
    this.setState({ slidingValue: null });
  }

  render() {
    const { durationMillis, positionMillis } = this.props;
    const { slidingValue } = this.state;

    return (
      <View>
        <Slider
          value={slidingValue || positionMillis}
          minimumValue={0}
          maximumValue={durationMillis}
          onSlidingStart={(value) => this.onSlidingStart(value)}
          onValueChange={(value) => this.onValueChange(value)}
          onSlidingComplete={(value) => this.onSlidingComplete(value)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.textLight, styles.timeStamp]}>
            {this.getTimeFromMiliseconds(
              slidingValue ? slidingValue : positionMillis
            )}
          </Text>

          <View
            style={{
              width: "70%",
            }}
          >
            <TextTicker
              duration={5000}
              marqueeDelay={2000}
              style={{ color: colors.solid.white, fontSize: 10 }}
            >
              {this.props.title}
            </TextTicker>
          </View>

          <Text style={[styles.textLight, styles.timeStamp]}>
            {this.getTimeFromMiliseconds(durationMillis)}
          </Text>
        </View>
      </View>
    );
  }
}

export default SliderComponent;
