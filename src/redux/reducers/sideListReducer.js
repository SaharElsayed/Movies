import * as types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SIDE_LIST:
      return { ...action.payload };
    default:
      return state;
  }
}