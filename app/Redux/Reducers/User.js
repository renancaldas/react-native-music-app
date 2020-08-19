import { LOGIN, LOGOUT } from "../Types/User";

const initialState = {
  login: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }

    case LOGOUT: {
        return {
          ...state,
          login: initialState.login,
        };
      }

    default:
      return state;
  }
}

export default reducer;
