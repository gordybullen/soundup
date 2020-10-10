import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../layout/pages/session_form/login_form_container";
import SignupFormContainer from "../layout/pages/session_form/signup_form_container";
import TrackEditForm from "../layout/pages/tracks/track_edit_form";
import UserEditForm from "../layout/pages/users/user_edit_form";
import { MODALS } from "../../shared/constants";

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  const component = () => {
    switch (modal) {
      case MODALS.SIGN_IN:
        return <LoginFormContainer />;
      case MODALS.CREATE_ACCOUNT:
        return <SignupFormContainer />;
      case MODALS.EDIT_TRACK:
        return <TrackEditForm />;
      case MODALS.EDIT_USER:
        return <UserEditForm />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-background" onClick={closeModal}>
      <div
        id={
          modal === "EDIT_TRACK"
            ? "edit-track"
            : modal === "EDIT_USER"
            ? "edit-user"
            : ""
        }
        className="modal-child"
        onClick={(e) => e.stopPropagation()}
      >
        {component()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
