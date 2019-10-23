import axiosInstance from './Api';

const fetchSideList = async () => await axiosInstance.get('/genre/movie/list');

const fetchDiscoverMovies = async (api, params) => await axiosInstance.get(`/movie/${api}`, { params: { ...params } });

const fetchGenresMovies = async params => await axiosInstance.get('/discover/movie', { params: { ...params } });

export default { fetchSideList, fetchDiscoverMovies, fetchGenresMovies };