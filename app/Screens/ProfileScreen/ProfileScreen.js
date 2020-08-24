import React from "react";
import { View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container, Title, Subtitle, LinkRow, Link, LinkBack } from "./style";

import { appClearAllAction, setRouteAction } from "../../Redux/Actions/App";
import { playerClearAllAction } from "../../Redux/Actions/Player";
import { playlistClearAllAction } from "../../Redux/Actions/Playlist";
import { searchClearAllAction } from "../../Redux/Actions/Search";
import { userClearAll } from "../../Redux/Actions/User";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.User);
  const { routes } = useSelector((state) => state.App);

  const logout = () => {
    dispatch(appClearAllAction());
    dispatch(playerClearAllAction());
    dispatch(playlistClearAllAction());
    dispatch(searchClearAllAction());
    dispatch(userClearAll());
    dispatch(setRouteAction(routes.login));
  }

  const confirmLogout = () =>
    Alert.alert(
      "Logout",
      "Would you like to confirm?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: logout,
        },
      ],
      { cancelable: false }
    );

  return (
    login && (
      <Container>
        <View>
          <Subtitle>Logged as</Subtitle>

          <View style={{ marginTop: 10 }}>
            <Title>{login.userData.display_name}</Title>
            <Subtitle>{login.userData.email}</Subtitle>
          </View>
        </View>

        <LinkRow onPress={() => confirmLogout()}>
          <LinkBack name="chevron-thin-left" />
          <Link>Logout</Link>
        </LinkRow>
      </Container>
    )
  );
};

export default ProfileScreen;
