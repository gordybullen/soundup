json.extract! track, :id, :user_id, :title, :genre, :description, :created_at
json.imageUrl url_for(track.image_file) if track.image_file.attached?
json.audioFileUrl url_for(track.audio_file) if track.audio_file.attached?