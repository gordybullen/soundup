# [SoundUp][soundup]

![alt text][home]

## Introduction
SoundUp is a clone of [SoundCloud](soundcloud), a music and audio platform that lets people discover and enjoy a wide selection of music from a diverse community of creators.

## Technologies
### Frontend
* React
* Redux
* Javascript
* Node.js
* HTML5
* SCSS

### Backend
* Ruby on Rails
* PostgreSQL
* JBuilder

### Hosting 
* Heroku
* AWS

## Home Page
The home page welcomes users that are not signed in and provides them with information about that site, as well as links to create a new account or sign in. Once signed it, users can discover new music and creators from the home page.

![alt text][home_gif]

## User Authentication
**Users can create a new account, sign it, edit account information, and sign out.**
* A demo user account is available to sign in with and try out all the features.
* The user form will display errors if any authentication criteria is not met.

![alt text][user_auth]

## Upload
SoundUp allows users to upload their own music with artwork to share with the SoundUp community.

![alt text][upload]

## Audio Player
Users can listen to music while navigating SoundUp seamlessly without any interruption.
```
<div
  className={
    currentTrack || playing ? "audio-player-container" : "hidden"
  }
>
  <div className="audio-player">
    <audio
      id="audio"
      src={audio}
      controls
      preload="none"
      onPlaying={this.handleTimeElapsed}
      onLoadedMetadata={this.setMetadata}
    ></audio>
    {playerControls}
    {playerProgress}
    <div className="track-details">
      <img src={image} className="audio-player-image" />
      {trackInfo}
    </div>
  </div>
</div>
```

![alt text][audio_player]

## Comments
Users can create and delete their own comments on any track they choose.

![alt text][comments]

---

# Next Steps

- [ ] Likes/Follows
  * Users will be able to like tracks and follow other users on SoundUp.
  * Users will have a feed to see liked tracks and the newest from their followed artists.
- [ ] Playlists
  * Users will be able to create playlists with any tracks on SoundUp.
- [ ] Waveforms
  * Track show pages will display the audio files waveform.

[soundup]: https://soundup-us.herokuapp.com
[soundcloud]: https://soundcloud.com/
[home]: https://soundup-seeds.s3-us-west-1.amazonaws.com/soundup_home.png
[home_gif]: https://soundup-seeds.s3-us-west-1.amazonaws.com/home_page.gif
[user_auth]: https://soundup-seeds.s3-us-west-1.amazonaws.com/user_auth.gif
[upload]: https://soundup-seeds.s3-us-west-1.amazonaws.com/upload.gif
[audio_player]: https://soundup-seeds.s3-us-west-1.amazonaws.com/audio_player.png
[comments]: https://soundup-seeds.s3-us-west-1.amazonaws.com/comments.gif
