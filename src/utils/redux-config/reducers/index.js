import { combineReducers } from 'redux';
import listReducer from './listReducer';

export default combineReducers({
  List: listReducer
});