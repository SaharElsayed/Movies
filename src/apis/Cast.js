import axiosInstance from './Api';

const fetchCastList = async (id) => await axiosInstance.get(`/movie/${id}/credits`);

export default { fetchCastList };
