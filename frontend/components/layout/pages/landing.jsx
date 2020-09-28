import React from 'react';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-header">
          <h1>Discover more with SoundUp</h1>
          <div className="landing-header-message">
            <p>SoundUp is the fastest growing music sharing platform,</p>
            <p>where you can stream the latest and your favorites for free.</p>
          </div>
          <div className="landing-header-btns">
            <button className="landing-btn-creator">
              Meet the Creator
            </button>
            <button className="landing-btn-signup">
              Sign up for free!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;