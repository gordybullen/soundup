import { connect } from 'react-redux';
import AudioPlayer from './footer';
import { receiveCurrentTrack, togglePlay } from '../../actions/audio_actions';

const mSTP = state => {
  const trackId = state.ui.audioPlayer.currentTrack;
  // debugger 
  // for some reason currentTrack is not evaluating to the track even tho trackId is correct in state...
  const currentTrack = state.entities.tracks[trackId] ? state.entities.tracks[trackId] : null;
  const artist = currentTrack ? state.entities.users[currentTrack.userId].username : null;
  
  return ({
    playing: state.ui.audioPlayer.playing,
    currentTrack: currentTrack,
    artist: artist
  })
}

const mDTP = dispatch => ({
  receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
  togglePlay: () => dispatch(togglePlay())
})

export default connect(mSTP, mDTP)(AudioPlayer);