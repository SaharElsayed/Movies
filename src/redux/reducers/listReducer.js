import * as types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_DISCOVER_MOVIES:
      return action.payload;
    case types.FETCH_GENRES_MOVIES:
      return action.payload;
    default:
      return state;
  }
}