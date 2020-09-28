import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveCurrentTrack, togglePlay } from '../actions/audio_actions';
import PlayButton from './play_button';

const mSTP = state => ({
  playing: state.ui.audioPlayer.playing,
  currentTrack: state.ui.audioPlayer.currentTrack,
});

const mDTP = dispatch => ({
  receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
  togglePlay: () => dispatch(togglePlay())
});

export default withRouter(connect(mSTP, mDTP)(PlayButton));