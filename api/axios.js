import axios from 'axios';
import { getLocalStorage } from '../util/common';

// Create an instance of axios with a base URL
const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL
});

// Request interceptor for adding common headers
axiosInstance.interceptors.request.use(
  async (config) => {
    // Check if the request requires a token
    if (config.needsToken) {
      config.headers.Authorization = 'Bearer ' + (await getLocalStorage('token'));
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
