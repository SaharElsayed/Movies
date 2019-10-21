import * as types from '../actions/types';

const intialState = { activeLink: 1, pageTitle: 'Popular' }
export default (state = intialState, action) => {
  // console.log(action);

  switch (action.type) {
    case types.FETCH_ACTIVE_TAB:
      return action.payload;
    default:
      return state;
  }
}