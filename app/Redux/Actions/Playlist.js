import { SET_SEARCH_RESULTS, SELECT_ITEM, SET_SEARCH_LOADING } from "../Types/Playlist";

export function setSearchResultsAction(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: searchResults,
  };
}

export function selectItemAction(payload) {
  return {
    type: SELECT_ITEM,
    payload,
  };
}


export function setSearchLoadingAction(isLoading) {
  return {
    type: SET_SEARCH_LOADING,
    payload: isLoading,
  };
}
