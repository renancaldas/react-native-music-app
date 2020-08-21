import {
  SEARCH_SET_INPUT,
  SEARCH_SET_ARTISTS,
  SEARCH_SET_ALBUMS,
  SEARCH_SET_TRACKS,
  SEARCH_SELECT_ITEM,
} from "../Types/Search";

export function setSearchInputAction(text) {
  return {
    type: SEARCH_SET_INPUT,
    payload: text,
  };
}

export function setArtistsAction(artists) {
  return {
    type: SEARCH_SET_ARTISTS,
    payload: artists,
  };
}


export function setAlbumsAction(albums) {
  return {
    type: SEARCH_SET_ALBUMS,
    payload: albums,
  };
}

export function setTracksAction(tracks) {
  return {
    type: SEARCH_SET_TRACKS,
    payload: tracks,
  };
}

export function selectItemAction(selectedItem) {
  return {
    type: SEARCH_SELECT_ITEM,
    payload: selectedItem,
  };
}
