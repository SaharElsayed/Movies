import axiosInstance from './Api';

const fetchCastList = async (id) => await axiosInstance.get(`/movie/${id}/credits`);

const fetchArtistDetails = async (id, params) => await axiosInstance.get(`/person/${id}`, { params: { ...params } });

export default { fetchCastList, fetchArtistDetails };
