import Api from './Api';


const fetchList = async category => await Api.get(`/movie/${category}`);
const fetchGenres = async () => await Api.get('/genre/movie/list');


export default { fetchList, fetchGenres };