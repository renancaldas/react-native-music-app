import { LOGIN, LOGOUT } from "../Types/User";

const initialState = {
  youtubeLogin: null,
};

function reducer(state = initialState, action) {
  console.log(`User reducer: `, action);

  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        youtubeLogin: action.payload,
      };
    }

    case LOGOUT: {
        return {
          ...state,
          youtubeLogin: initialState.youtubeLogin,
        };
      }

    default:
      return state;
  }
}

export default reducer;
