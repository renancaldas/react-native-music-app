import {
    PLAYLIST_ADD_TRACK,
    PLAYLIST_REMOVE_TRACK,
    PLAYLIST_SET_CURRENT_TRACK,
    PLAYLIST_CLEAR_ALL
  } from "../Types/Playlist";
  
  export function playlistAddTrackAction(track) {
    return {
      type: PLAYLIST_ADD_TRACK,
      payload: track,
    };
  }
  
  export function playlistRemoveTrackAction(track) {
    return {
      type: PLAYLIST_REMOVE_TRACK,
      payload: track,
    };
  }
  
  export function playlistSetCurrentTrackAction(index) {
    return {
      type: PLAYLIST_SET_CURRENT_TRACK,
      payload: index,
    };
  }
  
  export function playlistClearAllAction() {
    return {
      type: PLAYLIST_CLEAR_ALL
    };
  }
  