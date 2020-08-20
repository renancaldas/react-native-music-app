import {
  SEARCH_SET_ARTISTS,
  SEARCH_SET_ALBUMS,
  SEARCH_SET_TRACKS,
  SEARCH_SELECT_ITEM,
} from "../Types/Search";

const initialState = {
  artistResponse: null,
  albumResponse: null,
  trackResponse: null,
  selectedItem: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SET_ARTISTS: {
      return {
        ...state,
        artistResponse: action.payload,
      };
    }

    case SEARCH_SET_ALBUMS: {
      return {
        ...state,
        albumResponse: action.payload,
      };
    }

    case SEARCH_SET_TRACKS: {
      return {
        ...state,
        trackResponse: action.payload,
      };
    }

    case SEARCH_SELECT_ITEM: {
      return {
        ...state,
        selectedItem: action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
