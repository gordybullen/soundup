user = User.find(comment.user_id)
json.extract! comment, :id, :user_id, :track_id, :body, :created_at
json.username user.username
json.imageUrl url_for(user.image_file) if user.image_file.attached?