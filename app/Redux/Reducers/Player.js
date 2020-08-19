import {
  SET_AUDIO_PLAYER,
  SET_MUSIC_DATA,
  CLEAR_MUSIC_DATA,
  SET_IS_FULLSCREEN,
} from "../Types/Player";

const initialState = {
  audioPlayer: null,
  musicData: null,
  isFullScreen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUDIO_PLAYER: {
      return {
        ...state,
        audioPlayer: action.payload,
      };
    }

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

    case SET_IS_FULLSCREEN: {
      return {
        ...state,
        isFullScreen: action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
