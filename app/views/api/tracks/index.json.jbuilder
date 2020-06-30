@tracks.each do |track|
  json.set! track.id do
    json.partial! 'api/tracks/track', track: track
    json.audioFileUrl url_for(track.audio_file)
  end
end