import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveTrackComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

const receiveTrackComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors,
  };
};

export const requestTrackComments = (trackId) => (dispatch) => {
  return CommentApiUtil.fetchTrackComments(trackId)
    .then((comments) => dispatch(receiveTrackComments(comments)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};

export const createComment = (comment) => (dispatch) => {
  return CommentApiUtil.createComment(comment)
    .then((newComment) => dispatch(receiveTrackComment(newComment)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentApiUtil.deleteComment(commentId)
    .then(() => dispatchEvent(removeComment(commentId)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};
