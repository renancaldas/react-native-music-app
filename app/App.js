import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import store from "./Redux/store";
import Login from "./Screens/Login";
import Playlist from "./Screens/Playlist";
import Player from "./Screens/Player";

const Stack = createStackNavigator();

const App = (props) => {
  const [loaded] = useFonts({
    SatisfyRegular: require("../assets/fonts/Satisfy-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            {/* Login 
          <Stack.Screen name="Login">
            {(props) => <Login {...props} title="Login" />}
          </Stack.Screen>*/}

            {/* Playlist */}
            <Stack.Screen name="Playlist">
              {(props) => <Playlist {...props} title="Playlist" />}
            </Stack.Screen>

            {/* Player */}
            <Stack.Screen name="Player">
              {(props) => <Player {...props} title="Player" />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEC",
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});

export default App;
