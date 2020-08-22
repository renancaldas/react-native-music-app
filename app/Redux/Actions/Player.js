import {
  PLAYER_SET_AUDIO_PLAYER,
  PLAYER_SET_CURRENT_TRACK_DATA,
  PLAYER_SET_PLAYBACK_STATUS,
  PLAYER_UNLOAD_TRACK,
  PLAYER_CLEAR_ALL,
} from "../Types/Player";

export function setAudioPlayerAction(audioPlayer) {
  return {
    type: PLAYER_SET_AUDIO_PLAYER,
    payload: audioPlayer,
  };
}

export function setCurrentTrackDataAction(currentTrackData) {
  return {
    type: PLAYER_SET_CURRENT_TRACK_DATA,
    payload: currentTrackData,
  };
}

export function setPlaybackStatusAction(playbackStatus) {
  return {
    type: PLAYER_SET_PLAYBACK_STATUS,
    payload: playbackStatus,
  };
}

export function playerUnloadTrackAction() {
  return {
    type: PLAYER_UNLOAD_TRACK,
  };
}

export function playerClearAllAction() {
  return {
    type: PLAYER_CLEAR_ALL,
  };
}
