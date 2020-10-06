import { connect } from "react-redux";
import React, { useEffect } from "react";
import { requestUser, updateUser } from "../../../../actions/user_actions";
import { requestTracks } from "../../../../actions/track_actions";

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    tracks: Object.values(state.entities.tracks),
    // tracks: Object.values(state.entities.tracks).forEach((track) => {
    //   if (track.userId === ownProps.match.params.userId) {
    //     tracks.push(track);
    //   }
    // }),
  };
};

const mDTP = (dispatch) => {
  return {
    requestUser: (userId) => dispatch(requestUser(userId)),
    updateUser: (user, userId) => dispatch(updateUser(user, userId)),
    requestTracks: (userId) => dispatch(requestTracks(userId)),
  };
};

const UserShow = (props) => {
  const { user, requestUser, updateUser, requestTracks, tracks } = props;

  useEffect(() => {
    requestUser(props.match.params.userId);
    requestTracks(props.match.params.userId);
  }, []);

  return (
    <div className="user-show-container">
      <div className="user-show-content">
        <div className="user-show-left">
          <img
            className="user-image"
            src={user.imageUrl ? user.imageUrl : null}
          />
          <div className="username">{user.username}</div>
        </div>
      </div>
      <div className="user-menu">
        <span>Tracks</span>
      </div>
      <div className="user-tracks">
        {tracks.map((track, idx) => (
          <div className={`track-item-${idx}`}>
            <div>{track.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mSTP, mDTP)(UserShow);
