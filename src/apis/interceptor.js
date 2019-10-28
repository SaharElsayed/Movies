export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    // request.headers['X-CodePen'] = 'https://codepen.io/teroauralinna/full/vPvKWe'
  }
  return request
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
  }
  return Promise.reject({ ...error })
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response
};