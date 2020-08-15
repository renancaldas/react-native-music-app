import { SET_MUSIC_DATA, CLEAR_MUSIC_DATA } from "../Types/Player";

const initialState = {
  musicData: null,
};

function reducer(state = initialState, action) {

  switch (action.type) {
    case SET_MUSIC_DATA: {
      return {
        ...state,
        musicData: action.payload,
      };
    }

    case CLEAR_MUSIC_DATA: {
      return {
        ...state,
        musicData: initialState.musicData,
      };
    }

    default:
      return state;
  }
}

export default reducer;
