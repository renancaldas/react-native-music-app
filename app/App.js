import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';

import store from './Redux/store';
import Login from "./Screens/Login";
import Player from "./Screens/Player";

const Stack = createStackNavigator();

const App = (props) => {
  console.log("[App] render()");

  const [loaded] = useFonts({
    SatisfyRegular: require("../assets/fonts/Satisfy-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {/* Login */}
          <Stack.Screen name="Login">
            {(props) => <Login {...props} title="Login" />}
          </Stack.Screen>

          {/* Details */}
          <Stack.Screen name="Player">
            {(props) => <Player {...props} title="Player" />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
