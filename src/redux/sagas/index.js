import { all } from 'redux-saga/effects';

import WatchSagas from './sagas';

export default function* rootSaga() {
  yield all([WatchSagas()]);
}