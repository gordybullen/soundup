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
      imageUrl: null
    };

    this.handleAudioFile = this.handleAudioFile.bind(this);
  };

  handlSubmit(e) {
    e.preventDefault();
    const formData = new FormData;
    formData.append('track[user_id]', this.state.userId);
    formData.append('track[title]', this.state.title);
    formData.append('track[genre]', this.state.genre);
    formData.append('track[description]', this.state.description);
    formData.append('track[audio_file]', this.state.audioFile);
    formData.append('track[image_file]', this.state.imageFile);
    // formData.append('track[duration]', this.state.audioFile.duration);
    // formData.append('track[image_url]', this.state.imageFile.url);
    $.ajax({
      url: '/api/tracks',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    });
  };

  handleAudioFile(e) {
    this.setState({audioFile: e.currentTarget.files[0]});
  };

  handleImageFile(e) {
    const imageFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadened = () => {
      this.setState({imageFile: imageFile, imageUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataUrl();
    };
  };

  uploadAudioFile() {
    return (
      <>
        <div className="track-form-message">
          Drag and drop your track here
              </div>
        <label className="track-input-container">or choose a track to upload
          <input
            type="file"
            onChange={this.handleAudioFile}
            className="track-input" 
          />
        </label>
      </>
    );
  };

  trackForm() {
    return (
      <form className="track-form">
        The rest of the track info
      </form>
    );
  };

  render() {
    return (
      <div className="track-form-container">
        <div className="track-form-content">
          <div className="track-upload">
            { !this.state.audioFile ? this.uploadAudioFile() : this.trackForm() }
          </div>
        </div>
      </div>
    );
  };
};

export default connect(mSTP, mDTP)(TrackForm);