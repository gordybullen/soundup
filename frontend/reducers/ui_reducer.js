import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import filtersReducer from './filters_reducer';
import audioPlayerReducer from './audio_player_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  audioPlayer: audioPlayerReducer,
  filters: filtersReducer,
});

export default uiReducer;