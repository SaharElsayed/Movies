import axiosInstance from './Api';

const fetchSideList = async () => await axiosInstance.get('/genre/movie/list');

const fetchDiscoverMovies = async api => await axiosInstance.get(`/movie/${api}`);

const fetchGenresMovies = async params => {
  return await axiosInstance.get('/discover/movie', {
    params: {
      ...params
    }
  })
};

export default { fetchSideList, fetchDiscoverMovies, fetchGenresMovies };