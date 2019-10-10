import { FETCH_LIST_REQUEST, FETCH_LIST } from './types';

export const fetchListRequest = () => ({ type: FETCH_LIST_REQUEST });
export const fetchList = payload => ({ type: FETCH_LIST, payload });

// ACTION CREATOR => GET-BOOKS-FAILED
// export const setError = error => ({ type: BOOKS_LOAD_FAIL, error});