import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(loggedInUser => dispatch(receiveCurrentUser(loggedInUser)))
    .fail(res => dispatch(receiveErrors(res.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(res => dispatch(receiveErrors(res.responseJSON)));
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)))
    .fail(res => dispatch(receiveErrors(res.responseJSON)));
};