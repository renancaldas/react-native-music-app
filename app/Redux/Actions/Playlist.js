import {
  PLAYLIST_ADD_TRACK,
  PLAYLIST_REMOVE_TRACK,
  PLAYLIST_SET_CURRENT_TRACK,
  PLAYLIST_CLEAR_ALL,
} from "../Types/Playlist";

import orderBy from "lodash/orderBy";
import {
  searchGetData,
} from "../../api/index";
import { setCurrentTrackDataAction } from "../Actions/Player";

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

export function playlistSetCurrentTrackAction(track) {
  return (dispatch) => {
    dispatch({
      type: PLAYLIST_SET_CURRENT_TRACK,
      payload: track,
    });

    searchGetData(`"${track.artists[0].name}"|"${track.name}"`).then(
      (videoData) => {
        const videoList = videoData.sourceList.filter(item => item.hasAudio && item.hasVideo);
        const orderedSourceList = orderBy(videoList, (item) => parseInt(item.contentLength), 'asc');
        dispatch(setCurrentTrackDataAction(orderedSourceList[0].url));
      }
    );
  };
}

export function playlistClearAllAction() {
  return {
    type: PLAYLIST_CLEAR_ALL,
  };
}
