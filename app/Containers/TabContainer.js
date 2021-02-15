import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-easy-toast';

import { Container, GradientBg, ViewContent, Footer } from "./styles";
import { AppContext } from "../contexts/AppContext";

import { tabRoutes } from '../Router/routes';

const TabContainer = ({ children }) => {
  const { route, setRoute, loading, setToast } = useContext(AppContext);

  const getStyle = (itemRoute) => {
    const defaultStyle = { color: "grey" };
    const selectedStyle = { color: "white" };

    return route === itemRoute ? selectedStyle : defaultStyle;
  }

  return (
    <Container>
      <GradientBg colors={["rgba(190,110,110,1)", "rgba(46,43,79,1)"]}>
        {/* Content */}
        <ViewContent>
          {children}
        </ViewContent>

        {/* Footer */}
        <Footer>
          {
            tabRoutes.map(item => (
              <TouchableOpacity key={item.route} onPress={() => setRoute(item.route)}>
                <Ionicons
                  name={item.icon}
                  size={32}
                  style={getStyle(item.route)}

                />
              </TouchableOpacity>
            ))
          }

        </Footer>

        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{ color: 'white' }}
          overlayColor="rgba(0, 0, 0, 0.9)"
        />

        <Toast ref={(toast) => setToast(toast)}/>
      </GradientBg>
    </Container>
  );
};

export default TabContainer;
