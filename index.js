import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./app/App";
import { store, persistor } from "./app/Redux/store";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(ReduxApp);
