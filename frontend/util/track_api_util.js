export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tracks'
  })
);

export const fetchTrack = trackId => (
  $.ajax({
    method: 'GET',
    url: `/api/tracks/${trackId}`
  })
);

export const createTrack = track => (
  $.ajax({
    url: '/api/tracks',
    method: 'POST',
    data: track,
    contentType: false,
    processData: false
  })
);

export const updateTrack = track => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tracks/${track.id}`,
    data: { track }
  })
);

export const deleteTrack = trackId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tracks/${trackId}`
  })
);