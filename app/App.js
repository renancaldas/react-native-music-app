import React from "react";
import { connect } from "react-redux";
import { Linking } from "react-native";
import { Audio } from "expo-av";
import qs from "query-string";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import SearchScreen from "./Screens/SearchScreen/SearchScreen";
import PlaylistScreen from "./Screens/PlaylistScreen/PlaylistScreen";
import PlayerScreen from "./Screens/PlayerScreen/PlayerScreen";
import Tabs from "./Tabs/Tabs";
import { AppContainer, ViewWrapper, TabWrapper } from "./styles";
import spotifyApi from "./api/spotify";

import { loginAction } from "./Redux/Actions/User";
import { setAudioPlayerAction, setPlaybackStatusAction } from "./Redux/Actions/Player";

Audio.setAudioModeAsync({
  staysActiveInBackground: false,
  playThroughEarpieceAndroid: false,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };

    this.onDeepLink = this.onDeepLink.bind(this);
    this.onPlaybackStatusChange = this.onPlaybackStatusChange.bind(this);
  }

  loadFonts() {
    Font.loadAsync({
      SatisfyRegular: require("../assets/fonts/Satisfy-Regular.ttf"),
    })
      .then(() => {
        this.setState({ fontsLoaded: true });
      })
      .catch((err) => {
        console.log(">>>> err", err);
      });
  }

  onDeepLink({ url }) {
    const { login } = this.props;

    console.log("[onDeepLink] ", url);
    const queryString =
      url.indexOf("?") !== -1 ? qs.parse(url.split("?")[1]) : null;

    if (queryString.login) {
      spotifyApi
        .getToken(queryString.code, queryString.authBase64)
        .then((spotifyToken) => {
          spotifyApi.getUserInfo(spotifyToken.access_token).then((userData) => {
            login({ ...queryString, spotifyToken, userData });
          });
        });
    }
  }

  onPlaybackStatusChange(playbackStatus) {
    this.props.setPlaybackStatus(playbackStatus);
  }

  componentDidMount() {
    Linking.addEventListener("url", this.onDeepLink);
    this.loadFonts();

    const player = new Audio.Sound();
    player.setOnPlaybackStatusUpdate(this.onPlaybackStatusChange);

    this.props.setAudioPlayer(player);
  }

  componentDidUpdate(prevProps) {
    const { audioPlayer, currentTrackData } = this.props;

    const hasChangedTrack = prevProps.currentTrackData !== currentTrackData;
    if (hasChangedTrack) {
      console.log("CHANGED TRACK");

      if (audioPlayer) {
        audioPlayer.unloadAsync().then(() => {
          audioPlayer.loadAsync({ uri: currentTrackData }).then(() => {
            audioPlayer.playAsync();
          })
        });
      }
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.onDeepLink);
  }

  render() {
    const { currentRoute, routes } = this.props;
    const { fontsLoaded } = this.state;

    if (fontsLoaded) {
      return (
        <AppContainer>
          {currentRoute === routes.login ? (
            <LoginScreen />
          ) : (
            <>
              <ViewWrapper>
                {
                  <ProfileScreen
                    isSelectedRoute={currentRoute === routes.profile}
                  />
                }
                {
                  <SearchScreen
                    isSelectedRoute={currentRoute === routes.search}
                  />
                }
                {
                  <PlaylistScreen
                    isSelectedRoute={currentRoute === routes.playlist}
                  />
                }
                {
                  <PlayerScreen
                    isSelectedRoute={currentRoute === routes.player}
                  />
                }
              </ViewWrapper>
              <TabWrapper>
                <Tabs />
              </TabWrapper>
            </>
          )}
        </AppContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}

function mapStateToProps(state) {
  return {
    currentRoute: state.App.currentRoute,
    routes: state.App.routes,
    currentTrack: state.Playlist.currentTrack,
    currentTrackData: state.Player.currentTrackData,
    audioPlayer: state.Player.audioPlayer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (userData) => {
      dispatch(loginAction(userData));
    },
    setAudioPlayer: (audioPlayer) => {
      dispatch(setAudioPlayerAction(audioPlayer));
    },
    setPlaybackStatus: (playbackStatus) => {
      dispatch(setPlaybackStatusAction(playbackStatus));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
