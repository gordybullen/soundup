import React, { useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../actions/modal_actions";
import { requestTracks } from "../../../actions/track_actions";
import { requestUsers } from "../../../actions/user_actions";
import { MODALS } from "../../../shared/constants";

const Landing = () => {
  const currentUser = useSelector((state) => state.session.id);
  const tracks = Object.values(useSelector((state) => state.entities.tracks));
  const users = useSelector((state) => state.entities.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(requestTracks(null, true));
      dispatch(requestUsers());
    }
  }, [currentUser]);

  const welcome = () => {
    return (
      <>
        <div className="landing-header">
          <h1>Discover more with SoundUp</h1>
          <div className="landing-header-message">
            <p>SoundUp is the fastest growing music sharing platform,</p>
            <p>where you can stream the latest and your favorites for free.</p>
          </div>
          <div className="landing-header-btns">
            <button className="landing-btn-creator">Meet the Creator</button>
            <button
              onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              className="landing-btn-signup"
            >
              Sign up for free!
            </button>
          </div>
        </div>
        <div className="trending">
          <div className="trending-content">
            <span className="trending-message">
              Hear what's trending for free in the SoundUp community
            </span>
            <div className="row-1">
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/See+You+Dancin'+-+EP.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/Smoke+Signals+-+Single.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/Love+Is+All+I+Got+-+EP.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/Not+All+the+Beautiful+Things.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/Phantoms.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
            </div>
            <div className="row-2">
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/IN+2+U.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/Bloom.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/Broccoli+(Remixes).jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/55.jpg"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
              <img
                src="https://soundup-seeds.s3-us-west-1.amazonaws.com/Missing+You+(feat.+AC+Slater+%26+Kaleem+Taylor).png"
                onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              />
            </div>
          </div>
          <div className="bottom-message">
            <span className="message-1">
              Thanks for listening. Now join in.
            </span>
            <span className="message-2">
              Save tracks. Upload your music. Discover hidden gems. All for
              free.
            </span>
            <button
              onClick={() => dispatch(openModal(MODALS.CREATE_ACCOUNT))}
              className="create-account-btn"
            >
              Create Account
            </button>
            <div className="sign-in">
              <span className="message-3">Already have an account?</span>
              <button
                onClick={() => dispatch(openModal(MODALS.SIGN_IN))}
                className="sign-in-btn"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const loggedIn = () => {
    if (currentUser && users) {
      return (
        <div className="logged-in-section-container">
          <div className="logged-in-section">
            <div className="title">
              <div className="title-1">SoundUp: Trending</div>
              <div className="title-2">Up-and-coming tracks on SoundUp</div>
            </div>
            <div className="landing-tracks">
              {tracks.slice(0, 4).map((track, idx) => (
                <Link
                  className="track-item"
                  key={`track-${idx}`}
                  to={`/tracks/${track.id}`}
                >
                  <img className="landing-track-img" src={track.imageUrl} />
                  <div className="track-artist">
                    {users[track.userId].username}
                  </div>
                  <div className="track-title">{track.title}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="logged-in-section">
            <div className="title">
              <div className="title-1">Dance/Electronic</div>
              <div className="title-2">Stay at home dance party</div>
            </div>
            <div className="landing-tracks">
              {tracks.slice(4, 8).map((track, idx) => (
                <Link
                  className="track-item"
                  key={`track-${idx}`}
                  to={`/tracks/${track.id}`}
                >
                  <img className="landing-track-img" src={track.imageUrl} />
                  <div className="track-artist">
                    {users[track.userId].username}
                  </div>
                  <div className="track-title">{track.title}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="logged-in-section">
            <div className="title">
              <div className="title-1">In the feels</div>
              <div className="title-2">Can you feel it?</div>
            </div>
            <div className="landing-tracks">
              {tracks.slice(10, 14).map((track, idx) => (
                <Link
                  className="track-item"
                  key={`track-${idx}`}
                  to={`/tracks/${track.id}`}
                >
                  <img className="landing-track-img" src={track.imageUrl} />
                  <div className="track-artist">
                    {users[track.userId].username}
                  </div>
                  <div className="track-title">{track.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        {!currentUser ? welcome() : loggedIn()}
      </div>
    </div>
  );
};

export default Landing;
