import {
  PLAYER_SET_AUDIO_PLAYER,
  PLAYER_SET_MUSIC_DATA,
  PLAYER_CLEAR_MUSIC_DATA,
  PLAYER_SET_IS_FULLSCREEN,
  PLAYER_CLEAR_ALL,
} from "../Types/Player";

export function setAudioPlayerAction(audioPlayer) {
  return {
    type: PLAYER_SET_AUDIO_PLAYER,
    payload: audioPlayer,
  };
}

export function setMusicDataAction(musicData) {
  return {
    type: PLAYER_SET_MUSIC_DATA,
    payload: musicData,
  };
}

export function clearMusicDataAction() {
  return {
    type: PLAYER_CLEAR_MUSIC_DATA,
  };
}

export function setIsFullscreenAction(isFullscreen) {
  return {
    type: PLAYER_SET_IS_FULLSCREEN,
    payload: isFullscreen,
  };
}

export function playerClearAllAction() {
  return {
    type: PLAYER_CLEAR_ALL,
  };
}
