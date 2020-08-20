import React from "react";
import { View, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { Container, Title, Subtitle, LinkRow, Link, LinkBack } from "./style";

import { loginAction } from "../../Redux/Actions/User";
import { setRouteAction } from "../../Redux/Actions/App";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.User);
  const { routes } = useSelector((state) => state.App);

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
          onPress: () => {
            dispatch(loginAction(null));
            dispatch(setRouteAction(routes.login));
          },
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
