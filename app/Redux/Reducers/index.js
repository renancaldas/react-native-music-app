import { combineReducers } from "redux";

import App from "./App";
import User from "./User";
import Playlist from "./Playlist";
import Player from "./Player";

export default combineReducers({
  App,
  User,
  Playlist,
  Player,
});
