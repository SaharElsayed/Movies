import * as types from './types';

// =========== side list ========
export const fetchSideListRequest = () => ({ type: types.FETCH_SIDE_LIST_REQUEST });
export const fetchSideList = payload => ({ type: types.FETCH_SIDE_LIST, payload });

//=========== fetch movies =====
export const fetchMoviesRequest = (keyword, params) => ({ type: types.FETCH_MOVIES_REQUEST, keyword, params });
export const fetchMovies = payload => ({ type: types.FETCH_MOVIES, payload });

//========= active tab ===========
export const fetchActiveTab = payload => ({ type: types.FETCH_ACTIVE_TAB, payload });

//========== search keyword =======
export const setSearchKeyword = payload => ({ type: types.SET_SEARCH_KEYWORD, payload });

//========= sort =========
export const setSorting = payload => ({ type: types.SET_SORTING, payload });

// =========== fetch cast ========
export const fetchCastRequest = id => ({ type: types.FETCH_CAST_REQUEST, id });
export const fetchCast = payload => ({ type: types.FETCH_CAST, payload });

// =========== fetch single movie ========
export const fetchSingleMovieRequest = (id, params) => ({ type: types.FETCH_SINGLE_MOVIE_REQUEST, id, params });
export const fetchSingleMovie = payload => ({ type: types.FETCH_SINGLE_MOVIE, payload });

//=========== fetch recommended =====
export const fetchRecommendedRequest = (id, params) => ({ type: types.FETCH_RECOMMENDED_REQUEST, id, params });
export const fetchRecommended = payload => ({ type: types.FETCH_RECOMMENDED, payload });