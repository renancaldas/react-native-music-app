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

export function setSelectedArtistAction(selectedArtist) {
  return {
    type: SEARCH_SET_SELECTED_ARTIST,
    payload: selectedArtist,
  };
}

export function setAlbumsAction(albums) {
  return {
    type: SEARCH_SET_ALBUMS,
    payload: albums,
  };
}

export function setSelectedAlbumAction(selectedAlbum) {
  return {
    type: SEARCH_SET_SELECTED_ALBUM,
    payload: selectedAlbum,
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

export function searchClearAllAction() {
  return {
    type: SEARCH_CLEAR_ALL,
  };
}
