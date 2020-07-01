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

    this.handleFile = this.handleFile.bind(this);
  };

  handleFile(e) {
    this.setState({audioFile: e.currentTarget.files[0]});
  };

  render() {
    console.log(this.state);
    return (
      <div className="track-form-container">
        <div className="track-form-content">
          <form className="track-form">
            <div className="track-form-message">
              Drag and drop your track here
            </div>
            <input type="file" 
              onChange={this.handleFile}/>
          </form>
        </div>
      </div>
    );
  };
};

export default connect(mSTP, mDTP)(TrackForm);