import {
  PLAYER_SET_AUDIO_PLAYER,
  PLAYER_SET_MUSIC_DATA,
  PLAYER_CLEAR_MUSIC_DATA,
  PLAYER_SET_IS_FULLSCREEN,
  PLAYER_CLEAR_ALL
} from "../Types/Player";

const initialState = {
  audioPlayer: null,
  musicData: null,
  isFullScreen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_SET_AUDIO_PLAYER: {
      return {
        ...state,
        audioPlayer: action.payload,
      };
    }

    case PLAYER_SET_MUSIC_DATA: {
      return {
        ...state,
        musicData: action.payload,
      };
    }

    case PLAYER_CLEAR_MUSIC_DATA: {
      return {
        ...state,
        musicData: initialState.musicData,
      };
    }

    case PLAYER_SET_IS_FULLSCREEN: {
      return {
        ...state,
        isFullScreen: action.payload,
      };
    }

    case PLAYER_CLEAR_ALL: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}

export default reducer;
