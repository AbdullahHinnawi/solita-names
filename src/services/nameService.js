import axios from 'axios';

const getNames = () => {
  const request = axios.get('/names');
  return request.then(res => res.data);
};

export default {getNames};