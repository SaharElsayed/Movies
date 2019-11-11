import * as types from '../actions/types';

const intialState = { loading: false };

export default (state = intialState, action) => {
  switch (action.type) {
    case types.SET_LOADER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
