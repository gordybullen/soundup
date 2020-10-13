export const fetchTracks = (userId, all) =>
  $.ajax({
    method: "GET",
    url: "/api/tracks",
    data: { userId, all },
  });

export const fetchTrack = (trackId) =>
  $.ajax({
    method: "GET",
    url: `/api/tracks/${trackId}`,
  });

export const createTrack = (track) =>
  $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: track,
    contentType: false,
    processData: false,
  });

export const updateTrack = (track, trackId) =>
  $.ajax({
    method: "PATCH",
    url: `/api/tracks/${trackId}`,
    data: track,
    contentType: false,
    processData: false,
  });

export const deleteTrack = (trackId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/tracks/${trackId}`,
  });
