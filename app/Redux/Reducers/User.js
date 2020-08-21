import { USER_LOGIN, USER_LOGOUT, USER_REFRESH_TOKEN } from "../Types/User";
import { act } from "react-test-renderer";

const initialState = {
  login: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }

    case USER_LOGOUT: {
        return {
          ...state,
          login: initialState.login,
        };
      }

      case USER_REFRESH_TOKEN: {
        return {
          ...state,
          login: {
            ...state.login,
            spotifyToken: action.payload
          },
        };
      }

    default:
      return state;
  }
}

export default reducer;
