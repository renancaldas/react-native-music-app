import React from "react";
import { connect } from 'react-redux'
import { Linking } from "react-native";
import { Audio } from "expo-av";
import qs from "query-string";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import SearchScreen from "./Screens/SearchScreen/SearchScreen";
import PlaylistScreen from "./Screens/PlaylistScreen/PlaylistScreen";
import PlayerScreen from "./Screens/PlayerScreen/PlayerScreen";
import Tabs from "./Tabs/Tabs";
import { AppContainer, ViewWrapper, TabWrapper } from "./styles";
import spotifyApi from "./api/spotify";

import { loginAction } from "./Redux/Actions/User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };

    this.onDeepLink = this.onDeepLink.bind(this);
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

  loadFonts() {
    Font.loadAsync({
      SatisfyRegular: require("../assets/fonts/Satisfy-Regular.ttf"),
    }).then(() => {
      this.setState({ fontsLoaded: true });
    }).catch((err) => {console.log('>>>> err', err)});
  }

  componentDidMount() {
    Linking.addEventListener("url", this.onDeepLink);
    this.loadFonts();
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
                {<ProfileScreen isSelectedRoute={currentRoute === routes.profile} />}
                {<SearchScreen isSelectedRoute={currentRoute === routes.search} />}
                {<PlaylistScreen isSelectedRoute={currentRoute === routes.playlist} />}
                {<PlayerScreen isSelectedRoute={currentRoute === routes.player} />}
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
    routes: state.App.routes
  }
};

function mapDispatchToProps(dispatch) {
  return {
    login: (userData) => {
      dispatch(loginAction(userData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
