import * as types from '../actions/types';

const intialState = { sortingKey: '' };

export default (state = intialState, action) => {
  switch (action.type) {
    case types.SET_SORTING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}