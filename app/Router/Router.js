import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Container, GradientBg, Header, Title, Footer } from './styles';

import Player from '../Player/Player';

const Router = () => {
  return (
    <Container>
      <GradientBg
        colors={["rgba(190,110,110,1)", "rgba(46,43,79,1)"]}
      >
        {/* Header */}
        <Header>
          <Title> Now Playing </Title>
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
