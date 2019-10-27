import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import API from '../../apis/Movies';

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

export default function* watchSagas() {
  yield takeEvery(types.FETCH_SIDE_LIST_REQUEST, getSideList);
  yield takeEvery(types.FETCH_MOVIES_REQUEST, getMovies);
}