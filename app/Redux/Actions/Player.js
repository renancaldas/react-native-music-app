import {
  SET_MUSIC_DATA,
  CLEAR_MUSIC_DATA,
  SET_IS_FULLSCREEN,
} from "../Types/Player";

export function setMusicDataAction(musicData) {
  return {
    type: SET_MUSIC_DATA,
    payload: musicData,
  };
}

export function clearMusicDataAction() {
  return {
    type: CLEAR_MUSIC_DATA,
  };
}

export function setIsFullscreenAction(isFullscreen) {
  return {
    type: SET_IS_FULLSCREEN,
    payload: isFullscreen,
  };
}
