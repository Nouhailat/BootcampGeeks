import axios from './axiosConfig';

export const login = (email, password) => {
  return axios.post('/auth/login', { email, password });
};

export const getProfile = () => {
  return axios.get('/me');
};
