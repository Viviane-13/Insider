import axios from 'axios';

//base url: https://api-ssl.bitly.com/v4/shorten'

export const key ='660228a94256a4648dca9988ce927535e20942ac';
const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`,
  }
});

export default api;