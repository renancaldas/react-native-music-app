import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import LottieView from "lottie-react-native";
import queryString from 'query-string';

import RoundedButton from "../Components/Buttons/RoundedButton";
const MusicAnimation = require("../../assets/lottie/4876-speakers-music.json");

const Login = ({ navigation }) => {
  const [canOpenUrl, setCanOpenUrl] = useState(null);
  const [loginUrl, setLoginUrl] = useState(null);

  useEffect(() => {
    if(!loginUrl) {
      fetch('https://us-central1-musicapp-286403.cloudfunctions.net/loginYoutube')
        .then((res) => res.json())
        .then((json) => setLoginUrl(json.url));
    } else {
      Linking.canOpenURL(loginUrl).then((supported) => {
        setCanOpenUrl(supported);
      });
    }

    const onDeepLink = ({ url }) => {
      const query = url.indexOf('?') !== -1 ? queryString.parse(url.split('?')[1]) : null;
      console.log('onDeepLink | query:', query);
    }

    Linking.addEventListener('url', onDeepLink);
    return () => {
      Linking.removeEventListener('url', onDeepLink);
    };
  });

  const onGoogleLogin = () => {
    if(canOpenUrl){
      Linking.openURL(loginUrl);
    }
  }

  const onSpotifyLogin = () => {
    alert('onSpotifyLogin')
  }

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
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: "40%",
            fontFamily: "SatisfyRegular",
            fontSize: 40,
            marginTop: 100,
          }}
        >
          Music App
        </Text>
      </View>
      <View style={styles.buttons}>

        <RoundedButton
          onPress={onGoogleLogin}
          backgroundColor="#f80002"
          text="Login with Google"
          icon="youtube"
        />
        <RoundedButton
          onPress={onSpotifyLogin}
          backgroundColor="#24d15d"
          text="Login with Spotify"
          icon="spotify"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'yellow',
    height: "93%",
  },
  logo: {
    // borderWidth: 1,
    // borderColor: 'red',
    height: "60%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttons: {
    // borderWidth: 1,
    // borderColor: 'blue',
    height: "40%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;