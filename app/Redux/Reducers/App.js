import { APP_SET_ROUTE } from "../Types/App";

const routes = {
  login: 'login',
  profile: 'profile',
  search: 'search',
  playlist: 'playlist',
  player: 'player',
};

const initialState = {
  routes,
  currentRoute: routes.login,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case APP_SET_ROUTE: {
      return {
        ...state,
        currentRoute: action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
