import {
  SELECT_ITEM,
  SET_SEARCH_RESULTS,
} from "../Types/Search";

export function selectItemAction(payload) {
  return {
    type: SELECT_ITEM,
    payload,
  };
}

export function setSearchResultsAction(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: searchResults,
  };
}
