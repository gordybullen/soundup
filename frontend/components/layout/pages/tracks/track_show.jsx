import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { requestTrack, deleteTrack } from '../../../../actions/track_actions';

const mSTP = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.trackId];
  const artist = track ? state.entities.users[track.userId] : null;
  const currentUser = state.session.id;
  // debugger
  return {
    track: track,
    artist: artist,
    currentUser: currentUser,
  };
}

const mDTP = dispatch => {
  return {
    requestTrack: trackId => dispatch(requestTrack(trackId)),
    deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  };
}

const TrackShow = props => {
  const { track, artist, currentUser } = props;

  useEffect(() => {
    props.requestTrack(props.match.params.trackId);
  }, []);

  const trackEdit = () => {
    return (
      track && currentUser === track.userId ? (
        <div className="track-edit-container">
          <button className="track-edit-btn edit">
            Edit
          </button>
          <button className="track-edit-btn delete">
            Delete
          </button>
        </div>
      ) : null
    );
  }

  return (
    <div className="track-show">
      <div className="track-show-container">
        <div className="track-show-left">
          <div className="track-info-container">
            <div className="track-info track-artist">
              {artist ? artist.username : null}
            </div><br/>
            <div className="track-info track-title">
              {track ? track.title : null}
            </div>
          </div>
          <audio controls src={track ? track.audioFileUrl : null}></audio>
        </div>
        <div className="track-show-right">
          <img src={track ? track.imageUrl : null} className="track-image" />
        </div>
      </div>
      {trackEdit()}
    </div>
  );
}

// class TrackShow extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.requestTrack(this.props.match.params.trackId);
//   }

//   render() {
//     const { track } = this.props;
//     return (
//       <div className="track-show-container">
//         <div className="track-title">
//           {track ? track.title : null}
//         </div>
//       </div>
//     );
//   }
// }

export default connect(mSTP, mDTP)(TrackShow);