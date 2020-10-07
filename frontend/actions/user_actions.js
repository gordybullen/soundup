import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors,
  };
};

export const requestUser = (userId) => (dispatch) => {
  return UserApiUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
    .fail((res) => dispatch(receiveUserErrors(res.responseJSON)));
};

export const updateUser = (user, userId) => (dispatch) => {
  return UserApiUtil.updateUser(user, userId)
    .then((updatedUser) => dispatch(receiveUser(updatedUser)))
    .fail((res) => dispatch(receiveUserErrors(res.responseJSON)));
};
