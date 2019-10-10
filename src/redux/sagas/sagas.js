import { call, put, takeEvery } from 'redux-saga/effects';
import Movies from '../../apis/Movies';
import * as types from '../actions/types';

function* getList() {
  try {
    const response = yield call(Movies.fetchList);
    const payload = response.data;
    console.log(payload)
    yield put({ type: types.FETCH_LIST, payload: payload });
  } catch (error) {
    console.log(error);

    // yield put(setError(error.toString()));
  }
}

export default function* watchSagas() {
  yield takeEvery(types.FETCH_LIST_REQUEST, getList)
}