import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";

import reducers from "./Reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['App', 'User', 'Search', 'Playlist'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

export { store, persistor };
