import { combineReducers } from 'redux';
import listReducer from './listReducer';
import sideListReducer from './sideListReducer';
import activeTabReducer from './activeTabReducer';

export default combineReducers({
  list: listReducer,
  sideMenue: sideListReducer,
  activeTab: activeTabReducer
});