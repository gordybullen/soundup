export const fetchTrackComments = (trackId) =>
  $.ajax({
    method: "GET",
    url: "/api/comments",
    data: { trackId },
  });

export const createComment = (comment) =>
  $.ajax({
    method: "POST",
    url: "/api/comments",
    data: comment,
    contentType: false,
    processData: false,
  });

export const deleteComment = (commentId) =>
  $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`,
  });
