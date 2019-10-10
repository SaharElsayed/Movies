import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index'

// ======== Compose redux dev tool with applyMiddleware ========
const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

const enhancer = composeEnhancers(
  applyMiddleware(saga),
);

const store = createStore(reducers, enhancer);

saga.run(rootSaga);

export default store;