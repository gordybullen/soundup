import { connect, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { requestTrack, deleteTrack } from "../../../../actions/track_actions";
import { requestUser } from "../../../../actions/user_actions";
import { openModal } from "../../../../actions/modal_actions";
import { MODALS } from "../../../../shared/constants";
import PlayButtonContainer from "./play_button_container";
import {
  requestTrackComments,
  createComment,
  deleteComment,
} from "../../../../actions/comment_actions";
import CommentForm from "./comment_form";
import Waveform from "waveform-react";
import load from "audio-loader";
import path from "path";
import aws from "aws-sdk";

const mSTP = (state, ownProps) => {
  // const track = state.entities.tracks[ownProps.match.params.trackId];
  // const artist = state.entities.users[track.userId];
  const currentUser = state.session.id;
  const commenter = currentUser ? state.entities.users[currentUser] : null;
  const stateComments = Object.values(state.entities.comments);
  const stateTrack = state.entities.tracks[ownProps.match.params.trackId];

  return {
    // track: track,
    // artist: artist,
    currentUser: currentUser,
    // comments: comments,
    commenter: commenter,
    stateComments,
    stateTrack,
  };
};

const mDTP = (dispatch) => {
  return {
    requestTrack: (trackId) => dispatch(requestTrack(trackId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    openModal: (modal) => dispatch(openModal(modal)),
    requestTrackComments: (trackId) => dispatch(requestTrackComments(trackId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

const TrackShow = (props) => {
  const {
    currentUser,
    openModal,
    commenter,
    stateComments,
    deleteComment,
    stateTrack,
  } = props;
  const [hooksReady, setHooksReady] = useState(false);
  const [track, setTrack] = useState({});
  const [comments, setComments] = useState([]);
  const [artist, setArtist] = useState({});
  const [buffer, setBuffer] = useState(null);
  // const s3 = new aws.S3();
  // const getParams = {
  //   Bucket: "soundup-dev",
  //   Key: track.url,
  // };

  useEffect(() => {
    let mounted = true;

    props.requestTrack(props.match.params.trackId).then((track) => {
      Promise.all([
        props.requestTrackComments(props.match.params.trackId),
        props.requestUser(track.track.userId),
      ]).then((res) => {
        if (mounted && res) {
          setTrack(track.track);
          setComments(Object.values(res[0].comments));
          setArtist(res[1].user);
          // artist = useSelector((state) => state.entities.users[track.track.userId]);
          setHooksReady(true);
        }
      });
    });
  }, []);

  useEffect(() => {
    setComments(Object.values(stateComments));
  }, [stateComments]);

  useEffect(() => {
    setTrack(stateTrack);
  }, [stateTrack]);

  // useEffect(() => {
  //   if (track.url) {
  //     fetch(track.url, {
  //       mode: "no-cors",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     })
  //       .then((res) => {
  //         res.arrayBuffer();
  //       })
  //       .then((b) => {
  //         setBuffer(b);
  //       });
  //   }
  // }, [track.url]);

  // useEffect(() => {
  //   s3.getObject(getParams, (err, data) => {
  //     // Handle any error and exit
  //     if (err) return err;

  //     // No error happened
  //     // Convert Body from a Buffer to a String

  //     // let objectData = data.Body.toString("utf-8"); // Use the encoding necessary
  //   });
  // }, [track.url]);

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

  function createdAtToDate(createdAt) {
    const date = createdAt.slice(0, 10);
    return date;
  }

  if (!hooksReady) {
    return <div></div>;
  } else {
    return (
      <div className="track-show">
        <div className="track-show-container">
          {buffer && (
            <Waveform // Audio buffer
              buffer={buffer}
              // waveform height
              height={150}
              markerStyle={{
                // Position marker color
                color: "#fff",
                // Position marker width (in pixels)
                width: 4,
              }}
            />
          )}
          <div className="track-show-left">
            <div className="track-info-container">
              <Link
                className="track-info track-artist"
                to={`/users/${artist.id}`}
              >
                {artist.username}
              </Link>
              <br />
              <div className="track-info track-title">
                {track ? track.title : null}
              </div>
            </div>
            <PlayButtonContainer trackId={track.id} />
          </div>
          <div className="track-show-right">
            <img src={track.imageUrl} className="track-image" />
          </div>
        </div>
        {trackEdit()}
        <CommentForm
          trackId={track.id}
          commenter={commenter}
          createComment={props.createComment}
        />
        <div className="track-lower-container">
          <div className="artist-container">
            <img src={artist.imageUrl} />
            <span>{artist.username}</span>
          </div>
          <div className="track-lower-right">
            <div className="lower-right-top">
              <div className="track-description">{track.description ? track.description : ""}</div>
              <div className="comment-count-container">
                <i className="far fa-comment-alt"></i>
                <span className="comment-count">
                  {" "}
                  {comments.length} comments
                </span>
              </div>
            </div>
            <div className="comments-container">
              {comments.map((comment, idx) => (
                <div className="comment-container" key={`comment-${idx}`}>
                  <div className="comment-left">
                    <img src={comment.imageUrl} />
                    <div className="comment-text">
                      <span className="comment-username">
                        {comment.username}
                      </span>
                      <span>{comment.body}</span>
                    </div>
                  </div>
                  <div className="comment-right">
                    {currentUser === comment.userId ? (
                      <button
                        className="comment-delete"
                        onClick={() => deleteComment(comment.id)}
                      >
                        X
                      </button>
                    ) : null}
                    <span className="comment-date">
                      {createdAtToDate(comment.createdAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mSTP, mDTP)(TrackShow);
