json.extract! user, :id, :username, :email, :location, :about
json.imageUrl url_for(user.image_file) if user.image_file.attached?