export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const TOGGLE_PLAY = "TOGGLE_PLAY";

export const receiveCurrentTrack = trackId => ({
  type: RECEIVE_CURRENT_TRACK,
  trackId
})

export const togglePlay = () => ({
  type: TOGGLE_PLAY
})