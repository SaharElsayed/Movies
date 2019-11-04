import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import API from '../../apis/Movies';
import CastAPI from '../../apis/Cast';


function* getSideList() {
  try {
    const response = yield call(API.fetchSideList);
    const payload = response.data.genres;
    yield put({ type: types.FETCH_SIDE_LIST, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

function* getMovies({ keyword, params }) {

  try {
    const response = yield call(API.fetchMovies, keyword, params);
    yield put({ type: types.FETCH_MOVIES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getCastList({ id }) {
  try {
    const response = yield call(CastAPI.fetchCastList, id);
    yield put({ type: types.FETCH_CAST, payload: response.data.cast });
  } catch (error) {
    console.log(error);
  }
}

function* getSingleMovie({ id, params }) {
  try {
    const response = yield call(API.fetchSingleMovie, id, params);
    yield put({ type: types.FETCH_SINGLE_MOVIE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getRecommended({ params, id }) {

  try {
    const response = yield call(API.fetchRecommended,id, params);
    yield put({ type: types.FETCH_RECOMMENDED, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

export default function* watchSagas() {
  yield takeEvery(types.FETCH_SIDE_LIST_REQUEST, getSideList);
  yield takeEvery(types.FETCH_MOVIES_REQUEST, getMovies);
  yield takeEvery(types.FETCH_CAST_REQUEST, getCastList);
  yield takeEvery(types.FETCH_SINGLE_MOVIE_REQUEST, getSingleMovie);
  yield takeEvery(types.FETCH_RECOMMENDED_REQUEST, getRecommended);

}