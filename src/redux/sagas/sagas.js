import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import movies from '../../apis/movies';

function* getList({ category }) {
  try {
    if (category) {
      const response = yield call(movies.fetchList, category);
      const payload = response.data;
      yield put({ type: types.FETCH_LIST, payload: payload });

    } else {
      //  fetch genres movies
      console.log('genres');
      const response = yield call(movies.fetchList);
      const payload = response.data;
      yield put({ type: types.FETCH_LIST, payload: payload });
    }

  } catch (error) {
    console.log(error);
  }
}

function* getGenres() {
  try {
    const response = yield call(movies.fetchGenres);
    const payload = response.data.genres;
    yield put({ type: types.FETCH_GENRES, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

export default function* watchSagas() {
  yield takeEvery(types.FETCH_LIST_REQUEST, getList);
  yield takeEvery(types.FETCH_GENRES_REQUEST, getGenres);

}