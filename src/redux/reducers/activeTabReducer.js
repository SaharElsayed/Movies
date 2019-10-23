import * as types from '../actions/types';
const intialState = { id: 1, title: 'popular' }
export default (state = intialState, action) => {
  switch (action.type) {
    case types.FETCH_ACTIVE_TAB:
      return action.payload;
    default:
      return state;
  }
}