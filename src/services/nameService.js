import axios from 'axios';

const getNames = () => {
  const request = axios.get('http://localhost:3001/names',{
    headers:{
      "access-control-allow-origin" : "*",
    }
  });
  return request.then(res => res.data);
};


export default {getNames}