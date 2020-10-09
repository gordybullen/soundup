import React from "react";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const audioPlayer = document.getElementById("audio");

    if (
      this.props.playing &&
      parseInt(this.props.currentTrack) === parseInt(this.props.match.params.trackId)
    ) {
      this.props.togglePlay();
      audioPlayer.pause();
    } else if (
      this.props.playing &&
      parseInt(this.props.currentTrack) !== parseInt(this.props.match.params.trackId)
    ) {
      this.props.togglePlay();
      audioPlayer.pause();
      this.props.receiveCurrentTrack(this.props.trackId);
      this.props.togglePlay();
      audioPlayer.setAttribute("autoPlay", "");
      // audioPlayer.play();
      const playPromise = audioPlayer.play();

      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
          });
      }
    } else {
      this.props.receiveCurrentTrack(this.props.match.params.trackId);
      this.props.togglePlay();
      audioPlayer.setAttribute("autoPlay", "");
      // audioPlayer.play();
      const playPromise = audioPlayer.play();

      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
          });
      }
    }
  }

  render() {
    let icon;
    if (
      this.props.playing &&
      parseInt(this.props.currentTrack) === parseInt(this.props.match.params.trackId)
    ) {
      icon = "pause";
    } else {
      icon = "play";
    }

    return (
      <div className="play-btn-container">
        <button className={`audio-${icon}`} onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default PlayButton;
