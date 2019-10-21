import * as types from './types';

export const fetchListRequest = (category) => ({ type: types.FETCH_LIST_REQUEST, category });
export const fetchList = payload => ({ type: types.FETCH_LIST, payload });

export const fetchGenresRequest = () => ({ type: types.FETCH_GENRES_REQUEST });
export const fetchGenres = payload => ({ type: types.FETCH_GENRES, payload });

export const fetchActiveTab = payload => ({ type: types.FETCH_ACTIVE_TAB, payload });