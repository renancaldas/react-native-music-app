import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { PLAYER_SET_PLAYBACK_STATUS } from './Types/Player';

const logger = createLogger({
  predicate: (getState, action) => action.type !== PLAYER_SET_PLAYBACK_STATUS
});

import reducers from "./Reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['App', 'User', 'Search', 'Playlist'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
const persistor = persistStore(store);

export { store, persistor };
