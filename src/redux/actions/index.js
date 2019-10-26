import * as types from './types';

// =========== side list ========
export const fetchSideListRequest = () => ({ type: types.FETCH_SIDE_LIST_REQUEST });
export const fetchSideList = payload => ({ type: types.FETCH_SIDE_LIST, payload });

//=========== fetch movies =====
export const fetchMoviesRequest = (keyword, params) => ({ type: types.FETCH_MOVIES_REQUEST, keyword, params });
export const fetchMovies = payload => ({ type: types.FETCH_MOVIES, payload });

//========= active tab ===========
export const fetchActiveTab = payload => ({ type: types.FETCH_ACTIVE_TAB, payload });

export const setSearchKeyword = payload => ({ type: types.SET_SEARCH_KEYWORD, payload });
//========= genres movies ========
// export const fetchGenresMovies = payload => ({ type: types.FETCH_GENRES_MOVIES, payload });
//====== search bar =========
// export const searchMoviesRequest = (keyword) => ({ type: types.SEARCH_MOVIES_REQUEST, keyword });
// export const searchMovies = payload => ({ type: types.SEARCH_MOVIES, payload });
