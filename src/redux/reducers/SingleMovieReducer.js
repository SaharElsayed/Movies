import * as types from '../actions/types';

const intialState = { movie: {}, cast: [] };

export default (state = intialState, action) => {
  switch (action.type) {
    case types.FETCH_CAST:
      return { ...state, cast: action.payload };
    case types.FETCH_SINGLE_MOVIE:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
}