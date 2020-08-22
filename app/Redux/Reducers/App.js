import { APP_SET_ROUTE, APP_CLEAR_ALL } from "../Types/App";

const routes = {
  login: "login",
  profile: "profile",
  search: "search",
  playlist: "playlist",
  player: "player",
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

    case APP_CLEAR_ALL: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}

export default reducer;
