import { connect } from 'react-redux';
import { requestTrack, deleteTrack } from '../../../../actions/track_actions';
import TrackShow from './track_show';

const mSTP = (state, ownProps) => {
  debugger
  const track = state.entities.tracks[ownProps.match.params.trackId]

  return {
    track: track
  };
};

const mDTP = dispatch => {
  return {
    requestTrack: trackId => dispatch(requestTrack(trackId)),
    deleteTrack: trackId => dispatch(deleteTrack(trackId))
  };
};

export default connect(mSTP, mDTP)(TrackShow);