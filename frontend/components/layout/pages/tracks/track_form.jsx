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
      genre: "",
      descrption: "",
      duration: 10,
      audioFile: null,
      imageFile: null,
      imageUrl: null
    };

    this.handleAudioFile = this.handleAudioFile.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
    this.handlSubmit = this.handlSubmit.bind(this);
  };

  handlSubmit(e) {
    e.preventDefault();
    const formData = new FormData;
    formData.append('track[user_id]', this.state.userId);
    formData.append('track[title]', this.state.title);
    formData.append('track[genre]', this.state.genre);
    formData.append('track[description]', this.state.description);
    formData.append('track[duration]', this.state.duration);
    if (this.state.audioFile) {
      formData.append('track[audio_file]', this.state.audioFile);
    };
    if (this.state.imageFile) {
      formData.append('track[image_file]', this.state.imageFile);
    };
    this.props.createTrack(formData)
      .then(newTrack => this.props.history.push("/"));
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleAudioFile(e) {
    this.setState({audioFile: e.currentTarget.files[0]});
  };

  handleImageFile(e) {
    const imageFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: imageFile, imageUrl: fileReader.result});
    };
    if (imageFile) {
      fileReader.readAsDataURL(imageFile);
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
            accept="audio/mp3, audio/wav"
          />
        </label>
      </>
    );
  };

  basicInfoForm() {
    const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
    return (
      <form onSubmit={this.handlSubmit} className="basic-info-form">
        <div className="basic-info-form-content">
          <div className="basic-info-form-header">
            Basic info
          </div>
          <div className="basic-info-form-middle">
            <div className="basic-info-form-image-upload">
              {preview}
              <label className="image-input-container">Upload image
                <input
                  type="file"
                  onChange={this.handleImageFile}
                  className="basic-info-image-input"
                  accept="image/jpg"
                />
              </label>
            </div>
            <div className="basic-info-mid-right">
              <div className="basic-info-form-inputs">
                <div className="wrapper">
                  <div className="label-container">
                    <label>Title</label>
                  </div>
                    <input type="text"
                      value={this.state.title}
                      onChange={this.update('title')}
                      className="basic-info-form-input"
                    />
                </div>
                <div className="wrapper">
                  <div className="label-container">
                    <label>Genre</label>
                  </div>
                    <input type="text"
                      value={this.state.genre}
                      onChange={this.update('genre')}
                      className="basic-info-form-input"
                    />
                </div>
                <div className="wrapper">
                  <div className="label-container">
                    <label>Description</label>
                  </div>
                    <textarea
                      value={this.state.description}
                      onChange={this.update('description')}
                      className="basic-info-form-input"
                    ></textarea>
                </div>
              </div>
            </div>
          </div>
          <button className="basic-info-form-submit">
            Save
          </button>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div className="track-form-container">
        <div className="track-form-content">
          {!this.state.audioFile ? this.uploadAudioFile() : this.basicInfoForm()}
        </div>
      </div>
    );
  };
};

export default connect(mSTP, mDTP)(TrackForm);