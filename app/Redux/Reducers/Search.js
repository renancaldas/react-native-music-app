import { 
  SELECT_ITEM, 
  SET_SELECT_ITEM_LOADING, 
  SET_SEARCH_RESULTS, 
  SET_SEARCH_LOADING 
} from "../Types/Search";

const initialState = {
  searchResults: null,
  selectedItem: null,
  isSearchLoading: false,
  isSelectItemLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ITEM: {
      return {
        ...state,
        selectedItem: action.payload,
      };
    }

    case SET_SELECT_ITEM_LOADING: {
      return {
        ...state,
        isSelectItemLoading: action.payload,
      };
    }
    

    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }

    case SET_SEARCH_LOADING: {
      return {
        ...state,
        isSearchLoading: action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
