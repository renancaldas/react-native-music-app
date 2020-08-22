import {
  PLAYER_SET_AUDIO_PLAYER,
  PLAYER_SET_CURRENT_TRACK_DATA,
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

export function playerClearAllAction() {
  return {
    type: PLAYER_CLEAR_ALL,
  };
}
