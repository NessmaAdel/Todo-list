import axios from 'axios';
import _get from 'lodash/fp/get';
import { sessionDestroyer } from './store/actions/authentication';
import store from './store';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Accept-Language': localStorage.getItem('lang'),
  }
});

instance.interceptors.request.use((config) => {
  const state = store.getState();
  const lang = _get('language.language_code', state);
  if (lang) config.headers['Accept-Language'] = lang;
  return config;
});

instance.interceptors.response.use(response => response, (error) => {
  sessionDestroyer(error.response && error.response.status);
  return Promise.reject(error);
});

export default instance;
