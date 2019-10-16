import { FETCH_LIST } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LIST: {
      return { list: action.payload }
    }
    default:
      return state;
  }
}