import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../actions/modal_actions"
import { MODALS } from "../../../shared/constants";

const Landing = () => {
  const currentUser = useSelector((state) => state.session.id);
  const dispatch = useDispatch();

  const welcome = () => {
      return (
        <>
          <div className="landing-header">
            <h1>Discover more with SoundUp</h1>
            <div className="landing-header-message">
              <p>SoundUp is the fastest growing music sharing platform,</p>
              <p>
                where you can stream the latest and your favorites for free.
              </p>
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
    return (
      <div></div>
    )
  }

  return (
    <div className="landing-container">
      <div className="landing-content">
        {!currentUser ? welcome() : loggedIn(\)}
      </div>
    </div>
  );
};

export default Landing;
