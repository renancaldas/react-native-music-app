import {
  SELECT_ITEM,
  SET_SELECT_ITEM_LOADING,
  SET_SEARCH_RESULTS,
  SET_SEARCH_LOADING,
} from "../Types/Playlist";

export function selectItemAction(payload) {
  return {
    type: SELECT_ITEM,
    payload,
  };
}

export function setSelectItemLoadingAction(isSelectItemLoading) {
  return {
    type: SET_SELECT_ITEM_LOADING,
    payload: isSelectItemLoading,
  };
}

export function setSearchResultsAction(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: searchResults,
  };
}

export function setSearchLoadingAction(isLoading) {
  return {
    type: SET_SEARCH_LOADING,
    payload: isLoading,
  };
}
