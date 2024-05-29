import axios from 'axios';

export const requestApi = axios.create({
  baseURL: 'https://api.mgmg.life/',
  headers: {
    'Content-Type': 'application/json',
  },
});
