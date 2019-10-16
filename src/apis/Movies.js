import Api from './Api';


const fetchList = async category => await Api.get(`/movie/${category}`);

export default { fetchList };