import {
  PLAYER_SET_AUDIO_PLAYER,
  PLAYER_SET_CURRENT_TRACK_DATA,
  PLAYER_SET_PLAYBACK_STATUS,
  PLAYER_UNLOAD_TRACK,
  PLAYER_CLEAR_ALL
} from "../Types/Player";

const initialState = {
  audioPlayer: null,
  playbackStatus: null,
  currentTrackData: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_SET_AUDIO_PLAYER: {
      return {
        ...state,
        audioPlayer: action.payload,
      };
    }

    case PLAYER_SET_CURRENT_TRACK_DATA: {
      return {
        ...state,
        currentTrackData: action.payload,
      };
    }

    case PLAYER_SET_PLAYBACK_STATUS: {
      return {
        ...state,
        playbackStatus: action.payload,
      };
    }

    case PLAYER_UNLOAD_TRACK: {
      if(state.audioPlayer) {
        state.audioPlayer.unloadAsync();
      }
      
      return state;
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
