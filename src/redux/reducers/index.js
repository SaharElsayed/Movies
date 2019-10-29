import { combineReducers } from 'redux';
import ListReducer from './ListReducer';
import SideListReducer from './SideListReducer';
import ActiveTabReducer from './ActiveTabReducer';
import SearchReducer from './SearchReducer';
import SortReducer from './SortReducer';
import SingleMovieReducer from './SingleMovieReducer';

export default combineReducers({
  list: ListReducer,
  sideMenue: SideListReducer,
  activeTab: ActiveTabReducer,
  searchKeyword: SearchReducer,
  sort: SortReducer,
  singleMovie: SingleMovieReducer
});