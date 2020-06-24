import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  };

  let component;
  switch (modal) {
    case 'Sign in':
      component = <LoginFormContainer />;
      // component = <h1>LoginFormContainer</h1>
      break;
    case 'Create Account':
      component = <SignupFormContainer />;
      // component = <h1>SignupFormContainer</h1>
      break;
    default:
      return null;
  };

  return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);