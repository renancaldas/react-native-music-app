import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-native";
import { EvilIcons, Fontisto } from "@expo/vector-icons";
import { Container, TabIcon } from "./styles";
import { setRouteAction } from "../Redux/Actions/App";

const Tabs = () => {
  const dispatch = useDispatch();
  const { currentRoute, routes } = useSelector((state) => state.App);
  const { login } = useSelector((state) => state.User);

  const changeRoute = (route) => dispatch(setRouteAction(route));

  return login && (
    <Container>
      <TabIcon
        onPress={() => changeRoute(routes.profile)}
        active={currentRoute === routes.profile}
      >
        {/* <EvilIcons name="user" size={40} style={{ color: "white" }} /> */}
        <Image
            style={{
              width: 35,
              height: 35,
              borderRadius: 25,
            }}
            source={{ uri: login.userData.images[0].url }}
          /> 
      </TabIcon>

      <TabIcon
        onPress={() => changeRoute(routes.search)}
        active={currentRoute === routes.search}
      >
        <EvilIcons name="search" size={40} style={{ color: "white" }} />
      </TabIcon>

      <TabIcon
        onPress={() => changeRoute(routes.playlist)}
        active={currentRoute === routes.playlist}
      >
        <Fontisto name="play-list" size={25} style={{ color: "white" }} />
      </TabIcon>

      <TabIcon
        onPress={() => changeRoute(routes.player)}
        active={currentRoute === routes.player}
      >
        <EvilIcons name="play" size={40} style={{ color: "white" }} />
      </TabIcon>
    </Container>
  );
};

export default Tabs;
