import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  };
};

const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};
const removeTrack = trackId => {
  return {
    type: REMOVE_TRACK,
    trackId
  };
};

export const requestTracks = () => dispatch => {
  return TrackApiUtil.fetchTracks()
    .then(tracks => dispatch(receiveTracks(tracks)));
};

export const requestTrack = trackId => dispatch => {
  return TrackApiUtil.fetchTrack(trackId)
    .then(track => dispatch(receiveTrack(track)));
};

export const createTrack = track => dispatch => {
  return TrackApiUtil.createTrack(track)
    .then(newTrack => dispatch(receiveTrack(newTrack)));
};

export const updateTrack = track => dispatch => {
  return TrackApiUtil.updateTrack(track)
    .then(updatedTrack => dispatch(receiveTrack(updatedTrack)));
};