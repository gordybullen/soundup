import React from "react";
import { Link } from "react-router-dom";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { duration: 0, timeElapsed: 0 };
    this.togglePlay = this.togglePlay.bind(this);
    this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
    this.handleProgressBar = this.handleProgressBar.bind(this);
    this.setMetadata = this.setMetadata.bind(this);
  }

  componentDidMount() {
    const audio = document.getElementById("audio");
    audio.volume = 0.5;
  }

  togglePlay() {
    const audio = document.getElementById("audio");

    this.props.playing ? audio.pause() : audio.play();
    this.props.togglePlay();
  }

  handleTimeElapsed() {
    const audio = document.getElementById("audio");
    const progressBar = document.getElementById("progress-bar");

    if (!audio.paused) {
      this.playInterval = setInterval(() => {
        progressBar.value = audio.currentTime;
        this.setState({ timeElapsed: audio.currentTime });
      }, 50);
    }
  }

  handleProgressBar(e) {
    const audio = document.getElementById("audio");
    audio.currentTime = e.target.value;
    this.setState({ timeElapsed: e.target.value });
  }

  setMetadata() {
    const audio = document.getElementById("audio");
    this.setState({ duration: audio.duration });
  }

  formatTime(time) {
    const secs = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    const seconds = secs < 10 ? `0${secs}` : `${secs}`;

    return `${minutes}:${seconds}`;
  }

  render() {
    const { playing, currentTrack } = this.props;
    const audio = currentTrack ? currentTrack.audioFileUrl : null;
    const image = currentTrack ? currentTrack.imageUrl : null;
    const artist = currentTrack ? this.props.artist : null;
    const trackInfo = currentTrack ? (
      <div className="track-info">
        <Link id="player-artist" to="/">
          {artist}
        </Link>
        <Link id="player-title" to={`/tracks/${currentTrack.id}`}>
          {currentTrack.title}
        </Link>
      </div>
    ) : null;
    const icon = playing ? "pause" : "play";
    const playerControls = currentTrack ? (
      <div className="player-controls">
        <button className={`${icon}-btn`} onClick={this.togglePlay}></button>
      </div>
    ) : null;
    const playerProgress = currentTrack ? (
      <div className="player-progress">
        <span id="time-elapsed">{this.formatTime(this.state.timeElapsed)}</span>
        <input
          type="range"
          id="progress-bar"
          min="0"
          defaultValue="0"
          max={this.state.duration}
          onInput={this.handleProgressBar}
        />
        <span id="duration">{this.formatTime(this.state.duration)}</span>
      </div>
    ) : null;
    
    return (
      <div className={currentTrack || playing ? "audio-player-container" : "hidden"}>
        <div className="audio-player">
          <audio
            id="audio"
            src={audio}
            preload="none"
            controls
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
    );
  }
}

export default AudioPlayer;
