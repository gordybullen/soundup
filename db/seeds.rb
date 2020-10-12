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

junior_jack = User.create(username: "Junior Jack", email: "juniorjack@gmail.com", password: "password")
junior_jack.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/juniorjack.jpg"), filename: "juniorjack.jpg")

see_you_dancin = Track.create(user_id: junior_jack.id, title: "See You Dancin' (Radio Edit)", genre: "House", description: "GROOVY")
see_you_dancin.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+See+You+Dancin'+(Radio+Edit).m4a"), filename: "01 See You Dancin' (Radio Edit).m4a")
see_you_dancin.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/See+You+Dancin'+-+EP.jpg"), filename: "See You Dancin' - EP.jpg")
see_you_dancin.save

e_samba_2018 = Track.create(user_id: junior_jack.id, title: "E Samba 2018 (Original Mix)", genre: "House", description: "FUNKY")
e_samba_2018.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+E+SAMBA+2018+(Original+Mix).mp3"), filename: "01 E SAMBA 2018 (Original Mix).mp3")
e_samba_2018.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/E+SAMBA+2018.png"), filename: "E SAMBA 2018.png")
e_samba_2018.save

chet_porter = User.create(username: "Chet Porter", email: "chetporter@gmail.com", password: "password")
chet_porter.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/chetporter.jpg"), filename: "chetporter.jpg")

stay = Track.create(user_id: chet_porter.id, title: "Stay (feat. Chelsea Cutler)", genre: "Electronic", description: "one day at a time")
stay.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+Stay+(feat.+Chelsea+Cutler).m4a"), filename: "01 Stay (feat. Chelsea Cutler).m4a")
stay.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Stay+(feat.+Chelsea+Cutler)+-+Single.jpg"), filename: "Stay (feat. Chelsea Cutler) - Single.jpg")
stay.save

broccoli_remix = Track.create(user_id: chet_porter.id, title: "Broccoli (feat. Lil Yachty) [Chet Porter Remix]", genre: "Remix", description: "lmk what y'all think")
broccoli_remix.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Broccoli+(feat.+Lil+Yachty)+%5BChet+Porter+Remix%5D.mp3"), filename: "Broccoli (feat. Lil Yachty) [Chet Porter Remix].mp3 ")
broccoli_remix.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Broccoli+(Remixes).jpg"), filename: "Broccoli (Remixes).jpg")
broccoli_remix.save

its_strange = Track.create(user_id: chet_porter.id, title: "It's Strange (Chet Porter Remix)", genre: "Remix", description: "had a lot of fun with this one")
its_strange.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/It's+Strange+(Chet+Porter+Remix).mp3"), filename: "It's Strange (Chet Porter Remix).mp3")
its_strange.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/It's+Strange+(Chet+Porter+Remix).jpg"), filename: "It's Strange (Chet Porter Remix).jpg")
its_strange.save

hotel_garuda = User.create(username: "Hotel Garuda", email: "hotelgaruda@gmail.com", password: "password")
hotel_garuda.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/hotelgaruda.png"), filename: "hotelgaruda.png")

fixed_on_you = Track.create(user_id: hotel_garuda.id, title: "Fixed on You (feat. Violet Days)", genre: "Electronic", description: "We can go far...")
fixed_on_you.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+Fixed+on+You+(feat.+Violet+Days).m4a"), filename: "01 Fixed on You (feat. Violet Days).m4a")
fixed_on_you.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Fixed+on+You+(feat.+Violet+Days)+-+Single.jpg"), filename: "Fixed on You (feat. Violet Days) - Single.jpg")
fixed_on_you.save

smoke_signals = Track.create(user_id: hotel_garuda.id, title: "Smoke Signals", genre: "Electronic", description: "this one goes out to all the seekers")
smoke_signals.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+Smoke+Signals.m4a"), filename: "01 Smoke Signals.m4a")
smoke_signals.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Smoke+Signals+-+Single.jpg"), filename: "Smoke Signals - Single.jpg")
smoke_signals.save

feed_me = User.create(username: "Feed Me", email: "feedme@gmail.com", password: "password")
feed_me.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/feedme.jpg"), filename: "feedme.jpg")

love_is_all_i_got = Track.create(user_id: feed_me.id, title: "Love Is All I Got", genre: "Collabo", description: "Check out the new album!")
love_is_all_i_got.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+Love+Is+All+I+Got.m4a"), filename: "01 Love Is All I Got.m4a")
love_is_all_i_got.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Love+Is+All+I+Got+-+EP.jpg"), filename: "Love Is All I Got - EP.jpg")
love_is_all_i_got.save

ophelia = Track.create(user_id: feed_me.id, title: "Ophelia", genre: "Electronic", description: "")
ophelia.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/07+Ophelia.m4a"), filename: "07 Ophelia.m4a")
ophelia.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Calamari+Tuesday.jpg"), filename: "Calamari Tuesday.jpg")
ophelia.save

what_so_not = User.create(username: "What So Not", email: "whatsonot@gmail.com", password: "password")
what_so_not.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/whatsonot.jpg"), filename: "whatsonot.jpg")

be_ok_again = Track.create(user_id: what_so_not.id, title: "Be Ok Again (feat. Daniel Johns)", genre: "Dance", description: "from the debut album")
be_ok_again.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/02+Be+Ok+Again+(feat.+Daniel+Johns).wav"), filename: "02 Be Ok Again (feat. Daniel Johns).wav")
be_ok_again.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Not+All+the+Beautiful+Things.jpg"), filename: "Not All the Beautiful Things.jpg")
be_ok_again.save

we_keep_on_running = Track.create(user_id: what_so_not.id, title: "We Keep on Running", genre: "Dance", description: "from the debut album")
we_keep_on_running.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/07+We+Keep+on+Running.wav"), filename: "07 We Keep on Running.wav")
we_keep_on_running.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Not+All+the+Beautiful+Things.jpg"), filename: "Not All the Beautiful Things.jpg")
we_keep_on_running.save

phantoms = User.create(username: "Phantoms", email: "phantoms@gmail.com", password: "password")
phantoms.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/phantoms_pic.jpg"), filename: "phantoms_pic.jpg")

colors = Track.create(user_id: phantoms.id, title: "Colors", genre: "Electronic", description: "check out the EP!")
colors.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/03+Colors.m4a"), filename: "03 Colors.m4a")
colors.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Broken+Halo+-+EP.jpg"), filename: "Broken Halo - EP.jpg")
colors.save

someone_to_talk_about = Track.create(user_id: phantoms.id, title: "Someone To Talk About (feat. Grace Mitchell)", genre: "Electronic", description: "don't you wanna be")
someone_to_talk_about.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/02+Someone+To+Talk+About+(feat.+Grace+Mitchell).m4a"), filename: "02 Someone To Talk About (feat. Grace Mitchell).m4a")
someone_to_talk_about.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Phantoms.jpg"), filename: "Phantoms.jpg")
someone_to_talk_about.save

the_knocks = User.create(username: "The Knocks", email: "theknocks@gmail.com", password: "password")
the_knocks.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/theknocks.jpg"), filename: "theknocks.jpg")

classic = Track.create(user_id: the_knocks.id, title: "Classic (feat. Powers)", genre: "Dance", description: "so classic")
classic.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/03+Classic+(feat.+Powers).m4a"), filename: "03 Classic (feat. Powers).m4a")
classic.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/55.jpg"), filename: "55.jpg")
classic.save

kiss_the_sky = Track.create(user_id: the_knocks.id, title: "Kiss the Sky (feat. Wyclef Jean)", genre: "Dance", description: "")
kiss_the_sky.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/04+Kiss+the+Sky+(feat.+Wyclef+Jean).m4a"), filename: "04 Kiss the Sky (feat. Wyclef Jean).m4a")
kiss_the_sky.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/55.jpg"), filename: "55.jpg")
kiss_the_sky.save

blu_j = User.create(username: "BLU J", email: "bluj@gmail.com", password: "password")
blu_j.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/bluj.jpg"), filename: "bluj.jpg")

hdlck = Track.create(user_id: blu_j.id, title: "HDLCK", genre: "Electronic", description: "")
hdlck.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/HDLCK.mp3"), filename: "HDLCK.mp3")
hdlck.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/HDLCK.jpg"), filename: "HDLCK.jpg")
hdlck.save

in_2_u = Track.create(user_id: blu_j.id, title: "IN 2 U", genre: "Electronic", description: "shoutout to Ariana!!!")
in_2_u.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/IN+2+U.mp3"), filename: "IN 2 U.mp3")
in_2_u.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/IN+2+U.jpg"), filename: "IN 2 U.jpg")
in_2_u.save

rufus_du_sol = User.create(username: "RÜFÜS DU SOL", email: "rufusdusol@gmail.com", password: "password")
rufus_du_sol.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/rufusdusol.jpg"), filename: "rufusdusol.jpg")

innerbloom = Track.create(user_id: rufus_du_sol.id, title: "Innerbloom", genre: "Electronic", description: "Bloom")
innerbloom.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/11+Innerbloom.m4a"), filename: "11 Innerbloom.m4a")
innerbloom.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Bloom.jpg"), filename: "Bloom.jpg")
innerbloom.save

you_were_right = Track.create(user_id: rufus_du_sol.id, title: "You Were Right", genre: "Electronic", description: "Bloom")
you_were_right.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/04+You+Were+Right.m4a"), filename: "04 You Were Right.m4a")
you_were_right.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Bloom.jpg"), filename: "Bloom.jpg")
you_were_right.save

tchami = User.create(username: "Tchami", email: "tchami@gmail.com", password: "password")
tchami.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/tchami.jpg"), filename: "tchami.jpg")

missing_you = Track.create(user_id: tchami.id, title: "Missing You (feat. AC Slater & Kaleem Taylor)", genre: "Future House", description: "")
missing_you.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/01+Missing+You+(feat.+AC+Slater+%26+Kaleem+Taylor).mp3"), filename: "01 Missing You (feat. AC Slater & Kaleem Taylor).mp3")
missing_you.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Missing+You+(feat.+AC+Slater+%26+Kaleem+Taylor).png"), filename: "Missing You (feat. AC Slater & Kaleem Taylor).png")
missing_you.save

shot_caller = Track.create(user_id: tchami.id, title: "Shot Caller", genre: "House", description: "")
shot_caller.audio_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Shot+Caller.mp3"), filename: "Shot Caller.mp3")
shot_caller.image_file.attach(io: open("https://soundup-seeds.s3-us-west-1.amazonaws.com/Fool's+Gold+Clubhouse.png"), filename: "Fool's Gold Clubhouse.png")
shot_caller.save

Comment.create(body: "Will definitely see me dancin to this one!", track_id: see_you_dancin.id, user_id: hotel_garuda.id)
Comment.create(body: "simple, yet effective", track_id: see_you_dancin.id, user_id: tchami.id)
Comment.create(body: "check out our tracks I'm sure you'll like them", track_id: see_you_dancin.id, user_id: phantoms.id)

Comment.create(body: "another great club tune", track_id: e_samba_2018.id, user_id: hotel_garuda.id)

Comment.create(body: "the feels man!!", track_id: stay.id, user_id: hotel_garuda.id)
Comment.create(body: "shimmery", track_id: stay.id, user_id: feed_me.id)

Comment.create(body: "this remix is so good", track_id: broccoli_remix.id, user_id: blu_j.id)
Comment.create(body: "haha nice", track_id: broccoli_remix.id, user_id: what_so_not.id)

Comment.create(body: "keep em coming", track_id: its_strange.id, user_id: hotel_garuda.id)
Comment.create(body: "so chill", track_id: its_strange.id, user_id: what_so_not.id)

Comment.create(body: "spread love", track_id: love_is_all_i_got.id, user_id: junior_jack.id)
Comment.create(body: "that synth tho", track_id: love_is_all_i_got.id, user_id: what_so_not.id)

Comment.create(body: "love the horns", track_id: ophelia.id, user_id: blu_j.id)

Comment.create(body: "this beat has me fixed", track_id: fixed_on_you.id, user_id: blu_j.id)
Comment.create(body: "great track guys", track_id: fixed_on_you.id, user_id: the_knocks.id)

Comment.create(body: "love these lyrics", track_id: smoke_signals.id, user_id: rufus_du_sol.id)
Comment.create(body: "the feels!", track_id: smoke_signals.id, user_id: phantoms.id)

Comment.create(body: "the drop is amazing", track_id: be_ok_again.id, user_id: hotel_garuda.id)
Comment.create(body: "I'll be ok after this track for sure", track_id: be_ok_again.id, user_id: tchami.id)

Comment.create(body: "TOTO!!!", track_id: we_keep_on_running.id, user_id: rufus_du_sol.id)

Comment.create(body: "dark and stormy", track_id: colors.id, user_id: tchami.id)
Comment.create(body: "interesting beat", track_id: colors.id, user_id: junior_jack.id)

Comment.create(body: "this one is something to talk about", track_id: someone_to_talk_about.id, user_id: hotel_garuda.id)

Comment.create(body: "so classic!", track_id: classic.id, user_id: junior_jack.id)
Comment.create(body: "feels like it for sure", track_id: classic.id, user_id: rufus_du_sol.id)

Comment.create(body: "love to vocals from Wyclef", track_id: kiss_the_sky.id, user_id: feed_me.id)

Comment.create(body: "amazing vocals", track_id: hdlck.id, user_id: chet_porter.id)

Comment.create(body: "we're in 2 dis one", track_id: in_2_u.id, user_id: phantoms.id)
Comment.create(body: "who are the vocals from?", track_id: in_2_u.id, user_id: chet_porter.id)

Comment.create(body: "great sound design", track_id: innerbloom.id, user_id: what_so_not.id)
Comment.create(body: "what a journey of a track", track_id: innerbloom.id, user_id: tchami.id)

Comment.create(body: "on point", track_id: you_were_right.id, user_id: blu_j.id)
Comment.create(body: "this song is in my top 10", track_id: you_were_right.id, user_id: hotel_garuda.id)

Comment.create(body: "wanna be a baller", track_id: shot_caller.id, user_id: junior_jack.id)
Comment.create(body: "I like this new house", track_id: shot_caller.id, user_id: blu_j.id)

Comment.create(body: "love the future vibes", track_id: missing_you.id, user_id: chet_porter.id)
Comment.create(body: "thanks!!", track_id: missing_you.id, user_id: tchami.id)