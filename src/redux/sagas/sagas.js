import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import movies from '../../apis/movies';

function* getList({ category }) {
  // console.log(category);

  try {
    if (category) {
      const response = yield call(movies.fetchList, category);
      // console.log(response);
      const payload = response.data;
      yield put({ type: types.FETCH_LIST, payload: payload });
    }

  } catch (error) {
    console.log(error);
    // yield put(setError(error.toString()));
  }
}

export default function* watchSagas() {
  yield takeLatest(types.FETCH_LIST_REQUEST, getList)
}