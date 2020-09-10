import { combineReducers } from "redux";

import App from "./App";
import User from "./User";
import Search from "./Search";
import Playlist from "./Playlist";
import Player from "./Player";

export default combineReducers({
  App,
  User,
  Search,
  Playlist,
  Player
});
