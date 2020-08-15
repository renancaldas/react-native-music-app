import { SET_SEARCH_RESULTS, SELECT_ITEM } from "../Types/Playlist";

export function setSearchResultsAction(payload) {
  return {
    type: SET_SEARCH_RESULTS,
    payload,
  };
}

export function selectItemAction(payload) {
  return {
    type: SELECT_ITEM,
    payload,
  };
}
