import axiosInstance from './Api';

const fetchSideList = async () => await axiosInstance.get('/genre/movie/list');

const fetchMovies = async (type, params) => {
  return await axiosInstance.get(`${handleBaseAPI(params, type)}`, { params: { ...params } });
}

const handleBaseAPI = (params, type) => {
  switch (true) {
    case !params.with_genres && !params.query:
      return `/movie/${type}`;
    case params.query && !params.with_genres:
      return `/search/movie`;
    default:
      return `discover/movie`
  }
};

export default { fetchSideList, fetchMovies };