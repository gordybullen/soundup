import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { requestTrack, deleteTrack } from "../../../../actions/track_actions";
import { openModal } from "../../../../actions/modal_actions";
import { MODALS } from "../../../../shared/constants";
import PlayButtonContainer from "../../../play_button_container";
import {
  requestTrackComments,
  createComment,
  deleteComment,
} from "../../../../actions/comment_actions";
import CommentForm from "./comment_form";

const mSTP = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.trackId];
  const artist = track ? state.entities.users[track.userId] : null;
  const currentUser = state.session.id;
  const commenter = currentUser ? state.entities.users[currentUser] : null;
  const comments = track ? Object.values(state.entities.comments) : null;

  return {
    track: track,
    artist: artist,
    currentUser: currentUser,
    comments: comments,
    commenter: commenter,
  };
};

const mDTP = (dispatch) => {
  return {
    requestTrack: (trackId) => dispatch(requestTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    openModal: (modal) => dispatch(openModal(modal)),
    requestTrackComments: (trackId) => dispatch(requestTrackComments(trackId)),
    createComment: (comment) => dispatch(createComment(comment)),
  };
};

const TrackShow = (props) => {
  const { track, artist, currentUser, openModal, comments, commenter } = props;

  useEffect(() => {
    props.requestTrack(props.match.params.trackId);
    props.requestTrackComments(props.match.params.trackId);
  }, []);

  const trackEdit = () => {
    return track && currentUser === track.userId ? (
      <div className="track-edit-container">
        <button
          className="track-edit-btn edit"
          onClick={() => openModal(MODALS.EDIT_TRACK)}
        >
          Edit
        </button>
        <button className="track-edit-btn delete">Delete</button>
      </div>
    ) : null;
  };

  if (track === undefined) {
    return null;
  }

  return (
    <div className="track-show">
      <div className="track-show-container">
        <div className="track-show-left">
          <div className="track-info-container">
            <div className="track-info track-artist">
              {artist.username}
              {/* {artist ? artist.username : null} */}
            </div>
            <br />
            <div className="track-info track-title">
              {track ? track.title : null}
            </div>
          </div>
          <PlayButtonContainer trackId={track} />
          {/* <audio controls src={track.audioFileUrl}></audio> */}
          {/* <audio controls src={track ? track.audioFileUrl : null}></audio> */}
        </div>
        <div className="track-show-right">
          <img src={track.imageUrl} className="track-image" />
          {/* <img src={track ? track.imageUrl : null} className="track-image" /> */}
        </div>
      </div>
      {trackEdit()}
      <CommentForm
        trackId={track.id}
        commenter={commenter}
        createComment={props.createComment}
      />
      {comments.map((comment, idx) => (
        <div key={`comment-${idx}`}>{comment.body}</div>
      ))}
    </div>
  );
};

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
