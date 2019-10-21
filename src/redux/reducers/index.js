import { combineReducers } from 'redux';
import listReducer from './listReducer';
import genresReducer from './genresReducer';
import activeTabReducer from './activeTabReducer';

export default combineReducers({
  list: listReducer,
  genres: genresReducer,
  activeTab: activeTabReducer
});