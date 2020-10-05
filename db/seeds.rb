# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Track.destroy_all
Comment.destroy_all

demo_user = User.create(username: "DemoUser", email: "demo@user.com", password: "password")
demo_user.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/See+You+Dancin'+-+EP.jpg"), filename: "See You Dancin' - EP.jpg")

demo_track = Track.create(user_id: demo_user.id, title: "See You Dancin' (Radio Edit)", genre: "House", description: "GROOVY")
demo_track.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+See+You+Dancin'+(Radio+Edit).m4a"), filename: "01 See You Dancin' (Radio Edit).m4a")
demo_track.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/See+You+Dancin'+-+EP.jpg"), filename: "See You Dancin' - EP.jpg")
demo_track.save