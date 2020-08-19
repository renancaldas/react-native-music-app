import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, Linking } from "react-native";
import LottieView from "lottie-react-native";

import colors from "../constants/colors";

import RoundedButton from "../Components/Buttons/RoundedButton";
const MusicAnimation = require("../../assets/lottie/4876-speakers-music.json");
import { getYoutubeLoginUrl } from "../api";


const Login = ({ navigation }) => {
  const user = useSelector((state) => state.User);

  const [canOpenUrl, setCanOpenUrl] = useState(null);
  const [loginUrl, setLoginUrl] = useState(null);

  useEffect(() => {
    if (!loginUrl) {
      getYoutubeLoginUrl().then((data) => {
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

    return () => {
    };
  });

  const onGoogleLogin = () => {
    if (canOpenUrl) {
      Linking.openURL(loginUrl);
    }
  };

  const onSpotifyLogin = () => {
    Linking.openURL(
      "https://accounts.spotify.com/authorize?response_type=code&client_id=77880ef48e6545949e1d36b049fb2f17&scope=user-read-private&redirect_uri=https://us-central1-musicapp-286403.cloudfunctions.net/callbackSpotify"
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LottieView
          source={MusicAnimation}
          autoPlay
          loop
          style={{
            position: "relative",
            top: 10,
            width: 400,
            height: 300,
            backgroundColor: colors.background.app,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: "40%",
            fontFamily: "SatisfyRegular",
            fontSize: 40,
            marginTop: 100,
            color: colors.text.title,
          }}
        >
          Music App
        </Text>
      </View>
      <View style={styles.buttons}>
        {/* <RoundedButton
          onPress={onGoogleLogin}
          backgroundColor={colors.buttons.google}
          text="Login with Google"
          icon="youtube"
        /> */}
        <RoundedButton
          onPress={onSpotifyLogin}
          backgroundColor={colors.buttons.spotify}
          text="Login with Spotify"
          icon="spotify"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.background.app,
  },
  logo: {
    height: "60%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttons: {
    height: "40%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
