import React, { useEffect, useContext } from "react";
import * as Linking from 'expo-linking';
import * as ScreenOrientation from "expo-screen-orientation";
import { AppContext } from "../contexts/AppContext";
import spotifyApi from '../api/spotify';
import qs from 'query-string';

import { login, home, search, playlist, player } from './routes';

import FullScreenContainer from '../Containers/FullScreenContainer';
import TabContainer from '../Containers/TabContainer';

import Login from "../Login/Login";
import Player from "../Player/Player";

const Router = () => {
  const { route, setUser, setScreenOrientation } = useContext(AppContext);

  useEffect(() => {
    const onDeepLink = ({ url }) => {
      console.log('[onDeepLink] ', url);

      const queryString =
        url.indexOf('?') !== -1 ? qs.parse(url.split('?')[1]) : null;

      if (queryString.login) {
        spotifyApi
          .getToken(queryString.code, queryString.authBase64)
          .then((spotifyToken) => {
            spotifyApi.getUserInfo(spotifyToken.access_token).then((userData) => {
              setUser({ ...queryString, spotifyToken, userData });
            });
          })
          .catch((ex) => {
            console.log('onDeepLink exception: ', ex);
          })
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

  switch (route) {
    case login.route: {
      return (
        <FullScreenContainer>
          <login.component />
        </FullScreenContainer>
      );
    }
    case home.route: {
      return (
        <TabContainer title={home.title}>
          <home.component />
        </TabContainer>
      );
    }
    case search.route: {
      return (
        <TabContainer title={search.title}>
          <search.component />
        </TabContainer>
      );
    }
    case playlist.route: {
      return (
        <TabContainer title={playlist.title}>
          <playlist.component />
        </TabContainer>
      );
    }
    case player.route: {
      return (
        <TabContainer title={player.title}>
          <player.component />
        </TabContainer>
      );
    }
  }
};

export default Router;
