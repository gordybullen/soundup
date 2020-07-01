import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      nextState[action.track.id] = action.track;
      return nextState;
    case REMOVE_TRACK:
      delete nextState[track.eventId];
      return nextState;
    default:
      return state;
  };
};

export default tracksReducer;