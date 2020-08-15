import { combineReducers } from "redux";

import User from "./User";
import Playlist from "./Playlist";
import Player from "./Player";

export default combineReducers({
  User,
  Playlist,
  Player,
});
