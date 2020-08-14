import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';

import Login from './Screens/Login';
import Player from './Screens/Player';

const Stack = createStackNavigator();

const App = (props) => {
  console.log('[App] props', props)

  const [loaded] = useFonts({
    SatisfyRegular: require('../assets/fonts/Satisfy-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      > 
        {/* Login */}
        <Stack.Screen name="Login" options={{ title: "Login title" }}>
          {(props) => <Login {...props} text="login props" />}
        </Stack.Screen>

        {/* Details */}
        <Stack.Screen name="Player" options={{ title: "Player title" }}>
          {(props) => <Player {...props} text="player props" />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
