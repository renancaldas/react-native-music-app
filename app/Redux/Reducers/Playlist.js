import {
  PLAYLIST_ADD_TRACK,
  PLAYLIST_REMOVE_TRACK,
  PLAYLIST_SET_CURRENT_TRACK,
} from "../Types/Playlist";

const initialState = {
  playlist: [],
  currentTrack: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PLAYLIST_ADD_TRACK: {
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    }

    case PLAYLIST_REMOVE_TRACK: {
      return {
        ...state,
        playlist: state.playlist.filter(
          (track) => track.id !== action.payload.id
        ),
      };
    }

    case PLAYLIST_SET_CURRENT_TRACK: {
      return {
        ...state,
        currentTrack: action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
