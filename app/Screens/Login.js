import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, Linking } from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";

import RoundedButton from "../Components/Buttons/RoundedButton";
import { getLogoSize } from "../helpers/dimensions";
import colors from "../constants/colors";
import * as api from "../api";

const MusicAnimation = require("../../assets/lottie/4031-voice-recognition.json");

const Login = ({ navigation }) => {
  const user = useSelector((state) => state.User);

  const [canOpenUrl, setCanOpenUrl] = useState(null);
  const [loginUrl, setLoginUrl] = useState(null);

  useEffect(() => {
    if (!loginUrl) {
      api.getYoutubeLoginUrl().then((data) => {
        setLoginUrl(data.url);
      });
    } else {
      Linking.canOpenURL(loginUrl).then((supported) => {
        setCanOpenUrl(supported);
      });
    }

    if (user.login) {
      navigation.navigate("Playlist");
    }

    return () => {};
  });

  const onGoogleLogin = () => {
    if (canOpenUrl) {
      Linking.openURL(loginUrl);
    }
  };

  const onSpotifyLogin = () => {
    Linking.openURL(api.getSpotifyCodeUrl());
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
