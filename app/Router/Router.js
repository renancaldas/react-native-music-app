import React, { useEffect, useContext } from "react";
import { Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from 'expo-linking';

import { Container, GradientBg, Header, Title, Footer } from "./styles";

import Player from "../Player/Player";
import * as ScreenOrientation from "expo-screen-orientation";
import { AppContext } from "../../AppContext";
import spotifyApi from '../api/spotify';
import qs from 'query-string';

const Router = () => {
  const { setScreenOrientation } = useContext(AppContext);

  useEffect(() => {
    const onDeepLink = ({url}) => {
      console.log('[onDeepLink] ', url);
      const queryString =
        url.indexOf('?') !== -1 ? qs.parse(url.split('?')[1]) : null;
  
      if (queryString.login) {
        spotifyApi
          .getToken(queryString.code, queryString.authBase64)
          .then((spotifyToken) => {
            spotifyApi.getUserInfo(spotifyToken.access_token).then((userData) => {
              alert(JSON.stringify(userData));
              //login({...queryString, spotifyToken, userData});
            });
          });
      }
    }

    ScreenOrientation.getOrientationAsync().then(setScreenOrientation);
    Linking.addEventListener('url', onDeepLink);

    const subscription = ScreenOrientation.addOrientationChangeListener(({ orientationInfo }) => {
      setScreenOrientation(orientationInfo.orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
      Linking.removeEventListener('url', onDeepLink);
    };
  }, []);

  const onPressLogin = () => {
    Linking.openURL(spotifyApi.getCodeUrl());
  }

  return (
    <Container>
      <GradientBg colors={["rgba(190,110,110,1)", "rgba(46,43,79,1)"]}>
        {/* Header */}
        <Header>
          <Title> Now Playing </Title>
          <Button title="Login" onPress={onPressLogin}/>
        </Header>

        {/* Content */}
        <View
          style={{
            flex: 8,
            alignItems: "center",
            justifyContent: "space-around",
            padding: 50,
          }}
        >
          <Player />
        </View>

        {/* Footer */}
        <Footer>
          <Ionicons name="home" size={32} style={{ color: "grey" }} />
          <Ionicons name="search" size={32} style={{ color: "grey" }} />
          <Ionicons name="list" size={32} style={{ color: "grey" }} />
          <Ionicons
            name="md-play-circle-outline"
            size={32}
            style={{ color: "white" }}
          />
        </Footer>
      </GradientBg>
    </Container>
  );
};

export default Router;
