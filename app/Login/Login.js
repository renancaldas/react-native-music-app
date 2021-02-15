import React, { useContext, useEffect } from "react";
import { Animated, Easing, View } from 'react-native';
import * as Linking from 'expo-linking';
import spotifyApi from '../api/spotify';
import { AppContext } from "../contexts/AppContext";

import { FlexColumnBetween, BigTitle, MarginBottom } from './styles';

import LoginButton from './LoginButton';

const FullScreenContainer = () => {
  const { user, setRoute } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      setRoute('/home');
    }
  }, [user]);

  const onSpotifyLogin = () => {
    Linking.openURL(spotifyApi.getCodeUrl());
  }

  const spinValue = new Animated.Value(0);

  // First set up animation 
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <FlexColumnBetween>
      <Animated.Image
        style={{ transform: [{ rotate: spin }], width: 250, height: 250 }}
        source={require('../../assets/vinyl.png')} />


      <View>
        <BigTitle>
          Music App
        </BigTitle>
        <MarginBottom />
        <LoginButton
          onPress={onSpotifyLogin}
          backgroundColor="#24d15d"
          text="Login with Spotify"
          icon="spotify"
          hasIconBlackBg
        />
      </View>
    </FlexColumnBetween>
  );
};

export default FullScreenContainer;
