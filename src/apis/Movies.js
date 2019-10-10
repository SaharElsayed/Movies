import Api from './Api';

const fetchList = async () => await Api.get('/posts');

export default { fetchList };