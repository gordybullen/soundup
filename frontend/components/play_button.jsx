import React from 'react';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const audioPlayer = document.getElementById('audio');

    if (this.props.playing && this.props.currentTrack === this.props.match.params.trackId) {
      this.props.togglePlay();
      audioPlayer.pause();
    } else if (this.props.playing && this.props.currentTrack !== this.props.match.params.trackId) {
      this.props.togglePlay();
      audioPlayer.pause();
      this.props.receiveCurrentTrack(this.props.trackId);
      this.props.togglePlay();
      audioPlayer.setAttribute("autoPlay", "");
      audioPlayer.play();
    } else {
      this.props.receiveCurrentTrack(this.props.match.params.trackId);
      this.props.togglePlay();
      audioPlayer.setAttribute("autoPlay", "");
      audioPlayer.play();
    }
  }

  render() {
    let icon;
    if (this.props.playing && this.props.currentTrack === this.props.match.params.trackId) {
      icon = 'pause';
    } else {
      icon = 'play';
    }

    return (
      <button className={`audio-${icon}`} onClick={this.handleClick}>
        Play/Pause
      </button>
    )
  }
}

export default PlayButton;