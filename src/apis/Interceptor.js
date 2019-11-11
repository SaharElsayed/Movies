import store from './../redux/store';
import { setLoader } from './../redux/actions/index';
import history from './../app/history';

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    store.dispatch(setLoader({ loading: true }));
    // Modify request here
    // request.headers['X-CodePen'] = 'https://codepen.io/teroauralinna/full/vPvKWe'
  }
  return request
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
    store.dispatch(setLoader({ loading: false }));
    history.push('/error')
  }
  return Promise.reject({ ...error })
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
    store.dispatch(setLoader({ loading: false }));
  }
  return response
};
