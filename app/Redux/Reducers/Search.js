import {
  SELECT_ITEM,
  SET_SEARCH_RESULTS,
} from "../Types/Search";

const initialState = {
  searchResults: {
    artists: null,
    albums: null,
    tracks: null,
  },
  selectedItem: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ITEM: {
      return {
        ...state,
        selectedItem: action.payload,
      };
    }

    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default reducer;
