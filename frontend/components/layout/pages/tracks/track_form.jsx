import { connect } from 'react-redux';
import React from 'react';
import { createTrack } from '../../../../actions/track_actions';

const mSTP = state => {
  return {
    errors: state.errors.track,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {
    createTrack: track => dispatch(createTrack(track))
  };
};

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.currentUser.id,
      title: "",
      genre:"",
      descrption:"",
      duration: 0,
      audioFile: null,
      imageFile: null,
      imageUrl:""
    };
  };

  render() {
    return (
      <div className="track-form-container">
        <div className="track-form-content">
          <form className="track-form">
            <div className="track-form-message">
              Drag and drop your tracks here
            </div>

            
          </form>
        </div>
      </div>
    );
  };
};

export default connect(mSTP, mDTP)(TrackForm);