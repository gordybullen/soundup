import React from "react";
import { Link } from "react-router-dom";

const UserTrackIndexItem = (props) => {
  const { track } = props;

  return (
    <div className="track-item-container">
      <img src={track.imageUrl} className="track-image" />
      <Link to={`/tracks/${track.id}`}>{track.title}</Link>
    </div>
  );
};

export default UserTrackIndexItem;
