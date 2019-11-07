import * as types from '../actions/types';

export default (state = {id: 1, title: 'Popular', key:'popular'}, action) => {
  switch (action.type) {
    case types.FETCH_SIDE_LIST:
      return action.payload ;
    default:
      return state;
  }
}
