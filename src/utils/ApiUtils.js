import axios from 'axios';

const ApiUtils = {
  async post(url, data) {
    return axios.post(`https://api.example.com${url}`, data);
  },
};

export default ApiUtils;
