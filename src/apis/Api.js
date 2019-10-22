import axios from 'axios';
import { requestHandler, successHandler, errorHandler } from './interceptor';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    'api_key': '57aa01b7896ca3d312b43b4e9ade2b38'
  }
});

axiosInstance.interceptors.request.use(
  request => requestHandler(request)
);

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default axiosInstance;