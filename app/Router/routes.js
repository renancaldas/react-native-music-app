
import Login from "../Login/Login";
import Home from "../Home/Home";
import Search from "../Search/Search";
import Playlist from "../Playlist/Playlist";
import Player from "../Player/Player";

export const login = { route: '/login', title: '', icon: '', component: Login };
export const home = { route: '/home', title: '', icon: 'home', component: Home };
export const search = { route: '/search', title: 'Search', icon: 'search', component: Search };
export const playlist = { route: '/playlist', title: 'Playlist', icon: 'list', component: Playlist };
export const player = { route: '/player', title: 'Now Playing', icon: 'md-play-circle-outline', component: Player };

export const tabRoutes = [
  home,
  search,
  playlist,
  player,
]