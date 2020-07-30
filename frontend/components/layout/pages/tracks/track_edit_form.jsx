import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTrack } from '../../../../actions/track_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  let trackId = ownProps.location.pathname.split('/');
  trackId = trackId[trackId.length - 1];
  const track = state.entities.tracks[trackId];
  // const track = state.entities.tracks[1]; // how do I access ownProps from modal? withRouter!!!
  return {
    track: track,
    errors: state.errors.track,
  };
}

const mDTP = dispatch => {
  return {
    updateTrack: (track, trackId) => dispatch(updateTrack(track, trackId)),
    closeModal: () => dispatch(closeModal())
  };
}

const TrackEditForm = props => {
  const { track, errors } = props;
  const title = useFormInput(track.title);
  const genre = useFormInput(track.genre);
  const description = useFormInput(track.description ? track.description : "");
  const [imageUrl, setImageUrl] = useState(track.imageUrl);
  const [imageFile, setImageFile] = useState(null);
  
  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('track[title]', title.value);
    formData.append('track[genre]', genre.value);
    formData.append('track[description]', description.value);
    // formData.append('track[user_id]', this.state.userId);
    // formData.append('track[duration]', this.state.duration);

    // if (this.state.audioFile) {
    //   formData.append('track[audio_file]', this.state.audioFile);
    // }

    if (imageFile) {
      formData.append('track[image_file]', imageFile);
    }

    props.updateTrack(formData, track.id)
      .then(updatedTrack => {
        props.closeModal();
        props.history.push(`/tracks/${updatedTrack.track.id}`)
      });
  }

  const handleImageFile = e => {
    const imageFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      // this.setState({ imageFile: imageFile, imageUrl: fileReader.result });
      setImageFile(imageFile);
      setImageUrl(fileReader.result);
    }

    if (imageFile) {
      fileReader.readAsDataURL(imageFile);
    }
  }

  const basicInfoForm = () => {
    const preview = <img src={imageUrl} />;

    return (
      <form onSubmit={handleSubmit} className="basic-info-form">
        <div className="basic-info-form-content">
          <div className="basic-info-form-header">
            Edit track info
          </div>
          <div className="basic-info-form-middle">
            <div className="basic-info-form-image-upload">
              {preview}
              <label className="image-input-container">Upload image
                <input
                  type="file"
                  onChange={handleImageFile}
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
                    className="basic-info-form-input"
                    {...title}
                  />
                </div>
                <div className="wrapper">
                  <div className="label-container">
                    <label>Genre</label>
                  </div>
                  <input type="text"
                    className="basic-info-form-input"
                    {...genre}
                  />
                </div>
                <div className="wrapper">
                  <div className="label-container">
                    <label>Description</label>
                  </div>
                  <textarea
                    className="basic-info-form-input"
                    {...description}
                  >
                  </textarea>
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
  }

  return (
    <div className="track-edit-form-container">
      <div className="close-modal-container">
        <button
          className="close-modal"
          type="button"
          onClick={props.closeModal}>
          <i className="fa fa-times" style={{ color: "#ccc" }} aria-hidden="true"></i>
        </button>
      </div>
      {basicInfoForm()}
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.currentTarget.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

// const update = (field) => {
//   return e => this.setState({
//     [field]: e.currentTarget.value
//   });
// }

export default withRouter(connect(mSTP, mDTP)(TrackEditForm));