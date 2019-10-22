import * as types from './types';

// =========== side list ========
export const fetchSideListRequest = () => ({ type: types.FETCH_SIDE_LIST_REQUEST });
export const fetchSideList = payload => ({ type: types.FETCH_SIDE_LIST, payload });

//=========== discover movies =====
export const fetchDiscoverMoviesRequest = (id, api) => ({ type: types.FETCH_DISCOVER_MOVIES_REQUEST, id, api });
export const fetchDiscoverMovies = payload => ({ type: types.FETCH_DISCOVER_MOVIES, payload });

//========= genres movies ========
export const fetchGenresMovies = payload => ({ type: types.FETCH_GENRES_MOVIES, payload });

export const fetchActiveTab = payload => ({ type: types.FETCH_ACTIVE_TAB, payload });