import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text, Linking } from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";

import RoundedButton from "../../Components/Buttons/RoundedButton";
import { getLogoSize } from "../../helpers/dimensions";
import colors from "../../constants/colors";
import * as apiSpotify from "../../api/spotify";

const MusicAnimation = require("../../../assets/lottie/4031-voice-recognition.json");

import { setRouteAction } from "../../Redux/Actions/App";

const Login = (props) => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.User);
  const { routes } = useSelector((state) => state.App);

  useEffect(() => {
    if (login) {
      dispatch(setRouteAction(routes.profile))
    }

    return () => {};
  });

  const onSpotifyLogin = () => {
    Linking.openURL(apiSpotify.getCodeUrl());
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View>
          <LottieView
            source={MusicAnimation}
            autoPlay
            loop
            style={{
              width: "100%",
            }}
          />
          <AntDesign
            name="playcircleo"
            size={getLogoSize()}
            color={colors.text.title}
            style={{ position: "absolute", left: "37%", top: 30 }}
          />
        </View>

        <Text
          style={{
            fontFamily: "SatisfyRegular",
            fontSize: 50,
            color: colors.text.title,
          }}
        >
          Music App
        </Text>
      </View>

      <RoundedButton
        onPress={onSpotifyLogin}
        backgroundColor={colors.buttons.spotify}
        text="Login with Spotify"
        icon="spotify"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.background.app,
  },
  logo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Login;
