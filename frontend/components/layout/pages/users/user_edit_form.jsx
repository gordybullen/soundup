import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  let userId = ownProps.location.pathname.split("/");
  userId = userId[userId.length - 1];
  const user = state.entities.users[userId];

  return {
    user: user,
    errors: state.errors.user,
  };
};

const mDTP = (dispatch) => {
  return {
    updateUser: (user, userId) => dispatch(updateUser(user, userId)),
    closeModal: () => dispatch(closeModal()),
  };
};

const UserEditForm = (props) => {
  const { user, errors } = props;
  const username = useFormInput(user.username);
  const location = useFormInput(user.location ? user.location : "");
  const about = useFormInput(user.about ? user.about : "");
  const [imageUrl, setImageUrl] = useState(user.imageUrl ? user.imageUrl : "");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user[username]", username.value);
    formData.append("user[location]", location.value);
    formData.append("user[about]", about.value);

    if (imageFile) {
      formData.append("user[image_file]", imageFile);
    }

    props.updateUser(formData, user.id).then((updatedUser) => {
      props.closeModal();
      // props.history.push(`/users/${updatedUser.user.id}`);
    });
  };

  const handleImageFile = (e) => {
    const imageFile = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImageFile(imageFile);
      setImageUrl(fileReader.result);
    };

    if (imageFile) {
      fileReader.readAsDataURL(imageFile);
    }
  };

  const basicInfoForm = () => {
    const preview = <img src={imageUrl} />;

    return (
      <form onSubmit={handleSubmit} className="basic-info-form">
        <div className="user-info-form-content">
          <div className="basic-info-form-header">Edit user info</div>
          <div className="basic-info-form-middle">
            <div className="basic-info-form-image-upload">
              {preview}
              <label className="image-input-container">
                Upload image
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
                    <label>Username</label>
                  </div>
                  <input
                    type="text"
                    className="basic-info-form-input"
                    {...username}
                  />
                </div>
                <div className="wrapper">
                  <div className="label-container">
                    <label>Location</label>
                  </div>
                  <input
                    type="text"
                    className="basic-info-form-input"
                    {...location}
                  />
                </div>
                <div className="wrapper">
                  <div className="label-container">
                    <label>About</label>
                  </div>
                  <textarea
                    className="basic-info-form-input"
                    {...about}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <button className="basic-info-form-submit">Update</button>
        </div>
      </form>
    );
  };

  return (
    <div className="user-form-container">
      {/* <div className="close-modal-container">
        <button
          className="close-modal"
          type="button"
          onClick={props.closeModal}>
          <i className="fa fa-times" style={{ color: "#ccc" }} aria-hidden="true"></i>
        </button>
      </div> */}
      <div className="user-form-content">{basicInfoForm()}</div>
    </div>
  );
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.currentTarget.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

// const update = (field) => {
//   return e => this.setState({
//     [field]: e.currentTarget.value
//   });
// }

export default withRouter(connect(mSTP, mDTP)(UserEditForm));
