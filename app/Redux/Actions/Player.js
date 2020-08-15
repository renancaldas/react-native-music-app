import { SET_MUSIC_DATA, CLEAR_MUSIC_DATA } from "../Types/Player";

export function setMusicDataAction(payload) {
  return {
    type: SET_MUSIC_DATA,
    payload,
  };
}

export function clearMusicDataAction() {
  return {
    type: CLEAR_MUSIC_DATA
  };
}
