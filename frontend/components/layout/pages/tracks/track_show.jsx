import { connect } from 'react-redux';
import React from 'react';
import { requestTrack, deleteTrack } from '../../../../actions/track_actions';

const mSTP = (state, ownProps) => {
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

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId); // not working on initial load to fetch data... how do I get this to work?!!
  };

  render() {
    let track;
    this.props.track ? track = this.props.track : track = null;
    return (
      <div className="track-show-container">
        <div className="track-title">
          {track ? track.title : ''}
        </div>
      </div>
    )
  }
};

export default connect(mSTP, mDTP)(TrackShow);