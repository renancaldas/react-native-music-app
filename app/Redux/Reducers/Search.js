import {
  SEARCH_SET_INPUT,
  SEARCH_SET_ARTISTS,
  SEARCH_SET_SELECTED_ARTIST,
  SEARCH_SET_ALBUMS,
  SEARCH_SET_SELECTED_ALBUM,
  SEARCH_SET_TRACKS,
  SEARCH_SELECT_ITEM,
  SEARCH_CLEAR_ALL,
} from "../Types/Search";

const initialState = {
  searchText: null,
  artistResponse: null,
  selectedArtist: null,
  albumResponse: null,
  selectedAlbum: null,
  trackResponse: null,
  selectedItem: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SET_INPUT: {
      return {
        ...state,
        searchText: action.payload,
      };
    }

    case SEARCH_SET_ARTISTS: {
      return {
        ...state,
        artistResponse: action.payload,
      };
    }

    case SEARCH_SET_SELECTED_ARTIST: {
      return {
        ...state,
        selectedArtist: action.payload,
      };
    }

    case SEARCH_SET_ALBUMS: {
      return {
        ...state,
        albumResponse: action.payload,
      };
    }

    case SEARCH_SET_SELECTED_ALBUM: {
      return {
        ...state,
        selectedAlbum: action.payload,
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

    case SEARCH_CLEAR_ALL: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}

export default reducer;
