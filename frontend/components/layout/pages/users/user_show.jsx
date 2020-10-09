import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { requestUser, updateUser } from "../../../../actions/user_actions";
import { requestTracks } from "../../../../actions/track_actions";
import UserTrackIndexItem from "./user_track_index_item";

const mDTP = (dispatch) => {
  return {
    requestUser: (userId) => dispatch(requestUser(userId)),
    updateUser: (user, userId) => dispatch(updateUser(user, userId)),
    requestTracks: (userId) => dispatch(requestTracks(userId)),
  };
};

const UserShow = (props) => {
  const { requestUser, updateUser, requestTracks } = props;
  const [hooksReady, setHooksReady] = useState(false);
  const [user, setUser] = useState({});
  const [tracks, setTracks] = useState({});
  let { userId } = useParams();
  const currentUser = useSelector((state) => state.session.id);

  useEffect(() => {
    let mounted = true;

    Promise.all([
      requestUser(props.match.params.userId),
      requestTracks(props.match.params.userId),
    ]).then((res) => {
      if (mounted && res) {
        setHooksReady(true);
        setUser(res[0].user);
        let userTracks = {};
        Object.values(res[1].tracks).forEach((track) => {
          if (track.userId === parseInt(userId)) {
            userTracks[track.id] = track;
          }
        });
        setTracks(userTracks);
      }
    });
  }, [userId]);

  if (!hooksReady) {
    return <div></div>;
  } else {
    return (
      <div className="user-show-container">
        <div className="user-show-content">
          <div className="user-show-left">
            <img className="user-image" src={user.imageUrl} />
            <div className="username">{user.username}</div>
          </div>
        </div>
        <div className="user-menu">
          <div>
            {/* {currentUser === parseInt(userId ) ? 'PIZZA' : 'BANANA'} */}
          </div>
          <span>Tracks</span>
        </div>
        <div className="user-tracks">
          {Object.values(tracks).map((track, idx) => (
            <UserTrackIndexItem
              track={track}
              // user={useSelector((state) => state.entities.users[track.userId])}
              key={`track-item-${idx}`}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default connect(null, mDTP)(UserShow);
