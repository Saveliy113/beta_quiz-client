import axios from 'axios';
import { AxiosInstance } from 'axios';

const API_URL = `http://209.38.202.228:8000/api`;

console.log(API_URL);
console.log('Server URL: ', process.env.SERVER_URL);

export const $axios: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
  },
});
