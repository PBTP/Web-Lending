import axios from 'axios';

export const requestApi = axios.create({
  baseURL: 'https://api.mgmg.life/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
