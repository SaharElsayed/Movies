import * as types from '../actions/types';

const intialState = { search: '' };

export default (state = intialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_KEYWORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}