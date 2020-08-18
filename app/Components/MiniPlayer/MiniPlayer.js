import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../../constants/colors";
import { setIsFullscreenAction } from "../../Redux/Actions/Player";

import Slider from "../Player/Slider";

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const { musicData, isFullScreen } = useSelector((state) => state.Player);

  console.log('>>>> isFullScreen', isFullScreen)

  return (
    musicData && (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: isFullScreen ? 400 : 70,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: colors.solid.black,
          width: "100%",
        }}
      >
        <TouchableNativeFeedback
          onPress={() => dispatch(setIsFullscreenAction(!isFullScreen))}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 20
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.solid.lightgrey,
                width: 50,
                marginTop: 5,
              }}
            ></View>
          </View>
        </TouchableNativeFeedback>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
          }}
        >
          <View style={{ width: "80%" }}>
            <Slider
              title={musicData.title}
              setPosition={() => {}}
              positionMillis={500}
              durationMillis={1000}
            />
          </View>
          <TouchableOpacity>
            <FontAwesome5 name="play" size={25} color={colors.solid.white} />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

export default MiniPlayer;
