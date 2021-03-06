import React, { useState } from "react";
import moment from "moment";
import { Text, View } from "react-native";
import SliderComponent from "@react-native-community/slider";
import * as Haptics from 'expo-haptics';

import colors from "../../../constants/colors";

const Slider = ({ disabled, durationMillis, positionMillis, setPosition, width }) => {
  const [slidingValue, setSlidingValue] = useState(0);

  const getTimeFromMiliseconds = (miliseconds) => {
    const seconds = miliseconds / 1000;
    return moment(new Date()).startOf("day").seconds(seconds).format("mm:ss");
  };

  const onSlidingStart = () => {
    setSlidingValue(positionMillis);
  };

  const onValueChange = (slidingValue) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSlidingValue(slidingValue);
  };

  const onSlidingComplete = (value) => {
    setPosition(value);
    setSlidingValue(null);
  };

  return (
    <View style={{ width }}>
      <SliderComponent
        disabled={disabled}
        value={slidingValue || positionMillis}
        minimumValue={0}
        maximumValue={durationMillis}
        onSlidingStart={(value) => onSlidingStart(value)}
        onValueChange={(value) => onValueChange(value)}
        onSlidingComplete={(value) => onSlidingComplete(value)}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 11,
            fontWeight: "500",
            color: colors.text.title,
          }}
        >
          {getTimeFromMiliseconds(slidingValue ? slidingValue : positionMillis)}
        </Text>

        <Text
          style={{
            fontSize: 11,
            fontWeight: "500",
            color: colors.text.title,
          }}
        >
          {getTimeFromMiliseconds(durationMillis)}
        </Text>
      </View>
    </View>
  );
};

export default Slider;
