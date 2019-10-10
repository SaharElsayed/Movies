import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const isHandlerEnabled = (config = {}) => {
  console.log(config.hasOwnProperty('handlerEnabled'));
  console.log(!config['handlerEnabled']);

  return config.hasOwnProperty('handlerEnabled') && config['handlerEnabled'] ? false : true;
}

const requestHandler = (request) => {
  console.log(request);

  if (isHandlerEnabled(request)) {
    console.log('if block');
  }
  else {
    console.log('else block');
  }
  return request
}

const errorHandler = (error) => {

  if (isHandlerEnabled(error.config)) {
    // Handle errors
    // console.log(error);

  }
  return Promise.reject({ ...error })
}

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
    // console.log(response);

  }
  return response
}

Api.interceptors.request.use(
  request => requestHandler(request)
);

Api.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default Api;