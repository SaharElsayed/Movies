import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import movies from '../../apis/movies';

function* getSideList() {
  try {
    const response = yield call(movies.fetchSideList);
    const payload = response.data.genres;
    yield put({ type: types.FETCH_SIDE_LIST, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

function* getMovies({ id, api, params }) {
  console.log(api);

  try {
    if (api) {
      console.log(api);

      const response = yield call(movies.fetchDiscoverMovies, api, params);
      const payload = response.data;
      yield put({ type: types.FETCH_DISCOVER_MOVIES, payload: payload });
    } else {
      const response = yield call(movies.fetchGenresMovies, { ...params, 'with_genres': id });
      const payload = response.data;
      yield put({ type: types.FETCH_GENRES_MOVIES, payload: payload });
    }
  } catch (error) {
    console.log(error);
  }
}



export default function* watchSagas() {
  yield takeEvery(types.FETCH_SIDE_LIST_REQUEST, getSideList);
  yield takeEvery(types.FETCH_DISCOVER_MOVIES_REQUEST, getMovies);

}