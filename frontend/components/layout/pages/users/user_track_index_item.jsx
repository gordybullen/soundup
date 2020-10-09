import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserTrackIndexItem = (props) => {
  const { track } = props;
  const user = useSelector((state) => state.entities.users[track.userId]);

  return (
    <div className="track-item-container">
      <div className="track-item-left">
        <img src={track.imageUrl} className="track-image" />
        <div className="track-info">
          <span className="track-artist">{user.username}</span>
          <Link className="track-title" to={`/tracks/${track.id}`}>{track.title}</Link>
        </div>
      </div>
      <div className="track-item-right">
        <div className="track-createdAt">
          {track.createdAt.slice(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default UserTrackIndexItem;
