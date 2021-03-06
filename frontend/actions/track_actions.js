import * as TrackApiUtil from "../util/track_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_TRACKS,
    tracks,
  };
};

const receiveTrack = (track) => {
  return {
    type: RECEIVE_TRACK,
    track,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_TRACK_ERRORS,
    errors,
  };
};

const removeTrack = (trackId) => {
  return {
    type: REMOVE_TRACK,
    trackId,
  };
};

export const requestTracks = (userId, all) => (dispatch) => {
  return TrackApiUtil.fetchTracks(userId, all)
    .then((tracks) => dispatch(receiveTracks(tracks)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};

export const requestTrack = (trackId) => (dispatch) => {
  return TrackApiUtil.fetchTrack(trackId)
    .then((track) => dispatch(receiveTrack(track)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};

export const createTrack = (track) => (dispatch) => {
  return TrackApiUtil.createTrack(track)
    .then((newTrack) => dispatch(receiveTrack(newTrack)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};

export const updateTrack = (track, trackId) => (dispatch) => {
  return TrackApiUtil.updateTrack(track, trackId)
    .then((updatedTrack) => dispatch(receiveTrack(updatedTrack)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};

export const deleteTrack = (trackId) => (dispatch) => {
  return TrackApiUtil.deleteTrack(trackId)
    .then(() => dispatch(removeTrack(trackId)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};
